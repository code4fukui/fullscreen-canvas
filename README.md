# fullscreen-canvas

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple web component that creates a fullscreen HTML5 canvas.

## Demo
You can find a demo [here](https://taisukef.github.io/fullscreen-canvas/).

## Features
- Fullscreen HTML5 canvas
- Automatically resizes the canvas to fit the window size
- Provides a callback function to draw on the canvas

## Usage

To use the `FullscreenCanvas` component, import it and create a new instance:

```html
<script type="module">
import { FullscreenCanvas } from "./fullscreen-canvas.js";

document.body.appendChild(new FullscreenCanvas((g, w, h) => {
  // Draw something on the canvas
  g.beginPath();
  g.moveTo(0, 0);
  g.lineTo(w, h);
  g.stroke();
}, true));
</script>
```

The `FullscreenCanvas` constructor takes two arguments:
1. `onredraw`: a callback function that is called to draw on the canvas
2. `autostart`: a boolean that determines whether the animation should start automatically

## License
MIT License — see [LICENSE](LICENSE).