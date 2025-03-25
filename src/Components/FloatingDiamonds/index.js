import { isTab } from "utility/utils";
import React, { useState, useEffect, useRef } from "react";

import styles from "./style.module.scss";

const diamondImages = require
  .context("Assets/Image/shapeFrames", false, /\.svg$/)
  .keys()
  .map(require.context("Assets/Image/shapeFrames", false, /\.svg$/));

const totalDiamonds = isTab() ? 10 : 15;
const diamondSize = isTab() ? 30 : 50;

const getRandomPosition = () => ({
  x: Math.random() * (window.innerWidth - diamondSize),
  y: Math.random() * (window.innerHeight - diamondSize),
  dx: (Math.random() * 2 - 1) * 0.5,
  dy: (Math.random() * 2 - 1) * 0.5,
  image: diamondImages[Math.floor(Math.random() * diamondImages.length)],
});

const FloatingDiamonds = () => {
  const initialized = useRef(false);
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    if (!initialized.current) {
      setDiamonds(Array.from({ length: totalDiamonds }, getRandomPosition));
      initialized.current = true;
    }
  }, []);

  useEffect(() => {
    const updateDiamonds = () => {
      setDiamonds((prevDiamonds) =>
        prevDiamonds.map((diamond) => {
          let { x, y, dx, dy } = diamond;
          x += dx;
          y += dy;
          if (x <= 0 || x + diamondSize >= window.innerWidth) dx = -dx;
          if (y <= 0 || y + diamondSize >= window.innerHeight) dy = -dy;
          return { ...diamond, x, y, dx, dy };
        })
      );
      requestAnimationFrame(updateDiamonds);
    };
    requestAnimationFrame(updateDiamonds);
  }, []);

  return (
    <div className={styles['arjiv-particles']}>
      {diamonds.map((diamond, index) => (
        <img
          key={index}
          src={diamond.image}
          alt="."
          style={{
            position: "absolute",
            width: `${diamondSize}px`,
            height: `${diamondSize}px`,
            transform: `translate3d(${diamond.x}px, ${diamond.y}px, 0)`,
            pointerEvents: "none",
            zIndex: 99,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingDiamonds;
