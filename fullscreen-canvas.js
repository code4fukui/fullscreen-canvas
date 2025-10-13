export class FullscreenCanvas extends HTMLElement {
  constructor(onredraw, autostart) {
    super();
    this.onredraw = onredraw;

    const canvas = document.createElement("canvas");
    const g = canvas.getContext("2d");
    this.appendChild(canvas);
    document.body.style.margin = 0;
    const onresize = () => {
      const dpr = devicePixelRatio;
      const w = innerWidth;
      const h = innerHeight;
      const w2 = w * dpr;
      const h2 = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = w2;
      canvas.height = h2;
      this.g = g;
      this.w2 = w2;
      this.h2 = h2;
      if (autostart) {
        autostart = false;
        this.start();
      } else {
        this.redraw();
      }
    };
    addEventListener("resize", onresize);
    onresize();
  }
  onredraw(g, w, h) {
    g.lineWidth = 1;
    g.beginPath();
    g.moveTo(0, 0);
    g.lineTo(w, h);
    g.stroke();
  }
  redraw() {
    this.onredraw(this.g, this.w2, this.h2);
  }
  start() {
    if (this.loop) return;
    this.loop = true;
    const drawloop = () => {
      this.redraw();
      if (this.loop) {
        requestAnimationFrame(drawloop);
      }
    };
    drawloop();
  }
  stop() {
    this.loop = false;
  }
}
customElements.define("fullscreen-canvas", FullscreenCanvas);
