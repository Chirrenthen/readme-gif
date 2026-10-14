import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  try {
    // 1. Read URLs dynamically from data/gifs.json
    const filePath = path.join(process.cwd(), 'data', 'gifs.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const gifs = JSON.parse(fileContents);

    if (!Array.isArray(gifs) || gifs.length === 0) {
      return res.status(500).json({ error: "No URLs found in data/gifs.json" });
    }

    // 2. Pick a random URL
    const randomUrl = gifs[Math.floor(Math.random() * gifs.length)];

    // 3. Prevent GitHub Camo and browser caching
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0");
    res.setHeader("Pragma", "no-cache");
    res.setHeader("Expires", "0");

    // 4. Fetch the remote image
    const response = await fetch(randomUrl);
    if (!response.ok) {
      return res.redirect(302, randomUrl);
    }

    const contentType = response.headers.get("content-type") || (randomUrl.endsWith('.webp') ? "image/webp" : "image/gif");
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    res.setHeader("Content-Type", contentType);
    return res.status(200).send(buffer);
  } catch (err) {
    console.error("Error serving random GIF:", err);
    return res.status(500).send("Internal Server Error");
  }
}