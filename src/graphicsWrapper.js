import { Ticker } from 'pixi.js';
import { SmoothGraphics } from '@pixi/graphics-smooth';

export const createGraphics = (draw, state, ...args) => {
  const drawingContext = new SmoothGraphics(...args);

  let fillColor = 0xffffff;

  const p5 = {
    drawingContext,
    clear: () => drawingContext.clear(),
    fill: (color) => (fillColor = parseColor(color)),
    rect: (x, y, w, h = w, c = 0) => {
      drawingContext.beginFill(fillColor);
      drawingContext.drawRoundedRect(x, y, w, h, c);
      drawingContext.endFill();
    },
    redraw: (update) => {
      Object.assign(state, update(state));
      window.requestAnimationFrame(() => draw(p5, state));
      // Ticker.shared.addOnce(() => draw(p5, state));  // gets in the infinity loop
    },
  };

  draw(p5, state);

  return drawingContext;
};

export const parseColor = (color) => parseInt(color.slice(1), 16);
