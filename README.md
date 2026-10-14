# Readme Random GIF

A serverless endpoint built on Vercel that rotates an animated GIF/WebP dynamically on every request. Designed for GitHub profile READMEs.

## How to Add New GIFs
Open `data/gifs.json` and append your image URL to the array:
```json
[
  "[https://your-gif-or-webp-link.gif](https://your-gif-or-webp-link.gif)",
  "[https://another-link.webp](https://another-link.webp)"
]