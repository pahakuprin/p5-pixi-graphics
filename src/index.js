import { Application } from 'pixi.js';
import { createGraphics } from './graphicsWrapper';

const app = new Application({
  autoDensity: true,
  antialias: true,
  resolution: window.devicePixelRatio,
  backgroundColor: 0xdcdcdc,
  resizeTo: window,
});
document.body.appendChild(app.view);

const graphics = createGraphics((p5) => {
  p5.fill('#008C6E');
  p5.rect(50, 50, 200, 200, 100);
  p5.fill('#DC872D');
  p5.rect(300, 300, 100);
});

app.stage.addChild(graphics);
