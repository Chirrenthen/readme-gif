# Contributing to Readme Random GIF

Thanks for considering contributing! Whether you want to add new GIFs to the collection or improve the underlying service, contributions are welcome.

Here are a few ground rules to keep everything working smoothly.

---

## 1. Adding New GIFs / Memes

Adding your favorite GIF is the quickest way to contribute!

1. Fork this repo and open `data/gifs.json`.
2. Add your link to the end of the array.
3. Make sure your link meets these checks:
   - **Direct link only:** Must end directly in `.gif` or `.webp` (no links to web pages or search results).
   - **Strictly SFW:** No NSFW, offensive, or hateful content.
   - **No duplicates:** Search `data/gifs.json` first to see if it's already there.
   - **File size:** Try to stick to files under 5MB so profile pages load fast.
4. Submit a Pull Request with a title like `Add: <short description of gif>`.

---

## 2. Code Contributions

Want to make the caching better, add new endpoints, or improve performance? Awesome.

- Keep dependencies minimal—the goal is to keep this lightweight.
- Don't break the existing `/api/code` endpoint route.
- Test your changes locally before opening a PR:

```bash
npm install -g vercel
vercel dev
```

---

## 3. Submitting a Pull Request

- Keep PRs focused on one change (e.g., adding a batch of GIFs or a single bugfix).
- Be kind and respectful in PR reviews and issue threads.
