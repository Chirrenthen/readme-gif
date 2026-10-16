<div align="center">
  <img src="https://cdn-icons-png.flaticon.com/128/2245/2245357.png" width="75" alt="Logo" />
  <h1>Readme Random GIF</h1>
  <p>A serverless endpoint built on Vercel that rotates an animated GIF/WebP dynamically on every request. Designed for GitHub profile READMEs.</p>
</div>

---

## Usage

Add this to your GitHub profile `README.md`:

```html
<a href="[https://github.com/Chirrenthen/readme-gif](https://github.com/Chirrenthen/readme-gif)">
  <img width="350" height="350" src="[https://readme-gif.vercel.app/api/code](https://readme-gif.vercel.app/api/code)" alt="Random GIF">
</a>
```

## How to Add New GIFs

Open `data/gifs.json` and append your direct image link to the array:

```json
[
  "[https://i.giphy.com/example1.webp](https://i.giphy.com/example1.webp)",
  "[https://media.giphy.com/media/example2/giphy.gif](https://media.giphy.com/media/example2/giphy.gif)"
]
```

Push to your repo, and Vercel will automatically update the live endpoint.

---

## Contributing

Want to suggest new GIFs or improve the code? Check out our [Contributing Guidelines](CONTRIBUTING.md) to get started.

---

## License

This project is licensed under the [MIT License](LICENSE).  
*Note: All external GIF/media assets linked in this project remain the property of their respective creators.*
