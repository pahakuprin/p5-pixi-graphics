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

// Static drawing example

const staticGraphics = createGraphics((p5) => {
  p5.fill('#008C6E');
  p5.rect(50, 50, 200, 200, 50);
});

// Simple animation loop example with one holded value – time

const pulseGraphics = createGraphics(
  (p5, { time }) => {
    const width = Math.sin(time) * 300;

    p5.clear();
    p5.fill('#DC872D');
    p5.rect(300, 300, width);

    // Pass callback function to redraw that calculate new time value
    p5.redraw(() => ({ time: time + 0.01 }));
  },
  { time: 0 }
); // 0 is initial value of time

// Full drawing loop example with condition exit

const initialState = { rectWidth: 100, rectHeight: 0 };

const update = ({ rectHeight }) => ({
  rectHeight: rectHeight + 2,
});

const render = (p5, state) => {
  const { rectWidth, rectHeight } = state;

  p5.fill('#3294C7');
  p5.rect(700, 200, rectWidth, rectHeight);

  if (rectHeight < 300) {
    p5.redraw(update);
  }
};

const conditionGraphics = createGraphics(render, initialState);

app.stage.addChild(staticGraphics, pulseGraphics, conditionGraphics);
