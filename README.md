# fullscreen-canvas

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A zero-dependency Web Component that creates an HTML5 canvas that fills the entire browser window.

## Demo

View a live demo here *(demo unavailable)*.

The demo draws a continuous stream of colorful lines radiating from the center of the screen.

## Features

-   **Zero-dependency Web Component**: Use it declaratively in HTML or programmatically in JavaScript.
-   **Fullscreen**: The canvas automatically resizes to fill the window.
-   **High-DPI Aware**: Correctly handles high-resolution displays via `devicePixelRatio`.
-   **Custom Drawing**: Provide a callback function to implement your own drawing logic.
-   **Animation Control**: Includes `start()` and `stop()` methods for controlling the animation loop.

## Usage

First, include `fullscreen-canvas.js` in your project as a module.

### 1. Declarative Usage (in HTML)

Place the `<fullscreen-canvas>` tag in your HTML. You can then get a reference to the element in JavaScript to set its `onredraw` callback and control the animation.

```html
<!-- index.html -->
<body>
  <fullscreen-canvas id="main-canvas"></fullscreen-canvas>
</body>

<script type="module">
  import "./fullscreen-canvas.js"; // Registers the <fullscreen-canvas> element

  const canvas = document.getElementById("main-canvas");

  // Assign a function to the onredraw property
  canvas.onredraw = (g, w, h) => {
    // g: CanvasRenderingContext2D
    // w: canvas width (scaled by devicePixelRatio)
    // h: canvas height (scaled by devicePixelRatio)
    g.clearRect(0, 0, w, h); // Clear canvas on each frame
    g.beginPath();
    g.arc(w / 2, h / 2, Math.min(w, h) / 4, 0, Math.PI * 2);
    g.stroke();
  };

  // Manually start the animation loop
  canvas.start();
</script>
```

### 2. Programmatic Usage (in JavaScript)

Alternatively, you can create an instance of `FullscreenCanvas` directly in your JavaScript and append it to the document.

```html
<script type="module">
import { FullscreenCanvas } from "./fullscreen-canvas.js";

const draw = (g, w, h) => {
  // Example: Draw a random colored line from the center
  g.beginPath();
  g.moveTo(w / 2, h / 2);
  g.lineTo(Math.random() * w, Math.random() * h);
  g.strokeStyle = `hsl(${Math.random() * 360}, 100%, 70%)`;
  g.stroke();
};

// Create a new instance and add it to the page
// The second argument `true` starts the animation automatically
document.body.appendChild(new FullscreenCanvas(draw, true));
</script>
```

## API Reference

### Constructor

`new FullscreenCanvas(onredraw, autostart)`

-   **`onredraw`** `(g, w, h) => void` (optional): A callback function for drawing on the canvas.
    -   `g`: The `CanvasRenderingContext2D` object.
    -   `w`: The canvas width in physical pixels (scaled for `devicePixelRatio`).
    -   `h`: The canvas height in physical pixels (scaled for `devicePixelRatio`).
-   **`autostart`** `boolean` (optional, default: `false`): If `true`, the animation loop starts automatically.

### Properties

-   **`.onredraw`**: Gets or sets the drawing callback function. This can be assigned after the element is created.

### Methods

-   **`.start()`**: Starts the animation loop, repeatedly calling `onredraw` with `requestAnimationFrame`.
-   **`.stop()`**: Stops the animation loop.
-   **`.redraw()`**: Triggers a single call to the `onredraw` function without starting the loop.

## License

MIT License — see [LICENSE](LICENSE).