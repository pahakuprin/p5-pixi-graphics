import { SmoothGraphics } from '@pixi/graphics-smooth';

export const createGraphics = (draw, ...args) => {
  const drawingContext = new SmoothGraphics(...args);

  let fillColor = 0xffffff;

  const p5 = {
    drawingContext,
    fill: (color) => (fillColor = parseInt(color.slice(1), 16)),
    rect: (x, y, w, h = w, c = 0) => {
      drawingContext.beginFill(fillColor);
      drawingContext.drawRoundedRect(x, y, w, h, c);
      drawingContext.endFill();
    },
  };

  draw(p5);

  return drawingContext;
};
