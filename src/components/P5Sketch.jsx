// src/components/P5Sketch.jsx
import React, { useRef, useEffect } from "react";

const P5Sketch = () => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => {
        p.createCanvas(360, 220);
        p.background(200);
      };

      p.draw = () => {
        p.fill(255, 0, 0);
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
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
