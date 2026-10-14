import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

// In-memory cache for loaded GIFs and recent picks across warm requests
let cachedGifs = null;
const recentHistory = [];
const HISTORY_LIMIT = 8; // Won't repeat any of the last 8 GIFs served

function loadGifs() {
  if (!cachedGifs) {
    const filePath = path.join(process.cwd(), 'data', 'gifs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    cachedGifs = JSON.parse(fileContents);
  }
  return cachedGifs;
}

function getNonRepeatingRandomIndex(totalLength) {
  // If pool is tiny, just pick any random index
  if (totalLength <= HISTORY_LIMIT) {
    return crypto.randomInt(0, totalLength);
  }

  let index;
  let attempts = 0;
  // Keep picking until we find an index that hasn't been used recently
  do {
    index = crypto.randomInt(0, totalLength);
    attempts++;
  } while (recentHistory.includes(index) && attempts < 50);

  // Track recent picks
  recentHistory.push(index);
  if (recentHistory.length > HISTORY_LIMIT) {
    recentHistory.shift();
  }

  return index;
}

export default async function handler(req, res) {
  try {
    const gifs = loadGifs();

    if (!Array.isArray(gifs) || gifs.length === 0) {
      return res.status(500).json({ error: "No URLs found in data/gifs.json" });
    }

    // Select a non-repeating cryptographically random index
    const randomIndex = getNonRepeatingRandomIndex(gifs.length);
    const randomUrl = gifs[randomIndex];

    // Kill all caching: Browser, Camo proxy, Vercel Edge CDN
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0, proxy-revalidate");
    res.setHeader("CDN-Cache-Control", "no-store");
    res.setHeader("Vercel-CDN-Cache-Control", "no-store");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    // Fetch and stream the asset
    const response = await fetch(randomUrl);
    if (!response.ok) {
      return res.redirect(302, randomUrl);
    }

    const contentType = response.headers.get("content-type") || 
      (randomUrl.endsWith('.webp') ? "image/webp" : "image/gif");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Content-Type", contentType);
    return res.status(200).send(buffer);
  } catch (err) {
    console.error("Error serving random GIF:", err);
    return res.status(500).send("Internal Server Error");
  }
}
