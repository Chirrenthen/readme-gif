<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/2245/2245357.png" width="75" alt="Logo" />
  <h1>Readme Random GIF</h1>
  <p>A serverless endpoint built on Vercel that rotates an animated GIF/WebP dynamically on every request. Designed for GitHub profile READMEs.</p>
</div>

## Usage

```html
<a href="[https://github.com/Chirrenthen/readme-gif](https://github.com/Chirrenthen/readme-gif)">
  <img width="350" height="350" src="[https://readme-gif.vercel.app/api/code](https://readme-gif.vercel.app/api/code)">
</a>
```

## How to Add New GIFs

Open `data/gifs.json` and append your image URL to the array:

```json
[
  "[https://your-gif-or-webp-link.gif](https://your-gif-or-webp-link.gif)",
  "[https://another-link.webp](https://another-link.webp)"
]
```
