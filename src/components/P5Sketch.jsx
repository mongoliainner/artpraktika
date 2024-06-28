// src/components/P5Sketch.jsx
import React, { useRef, useEffect } from "react";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(sketchRef.current);
      };

      p.draw = () => {
        p.fill(255);
        p.noStroke();
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
      };

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      };
    };

    const p5Instance = new window.p5(sketch);

    return () => {
      p5Instance.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;
