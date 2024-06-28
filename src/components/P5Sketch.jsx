// src/components/P5Sketch.jsx
import React, { useRef, useEffect } from "react";
import p5 from "p5";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
      };

      p.draw = () => {
        p.background(200);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const myP5 = new p5(sketch, sketchRef.current);
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
