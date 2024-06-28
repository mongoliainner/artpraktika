// src/pages/Page2.jsx
import React, { useEffect } from "react";
import styles from "./Page2.module.css";

const images = [
  "assets/Blender1.png",
  "assets/Blender2.png",
  "assets/Blender3.png",
  "assets/Blender4.png",
  "assets/Blender5.png",
  "assets/Blender6.png",
];

const getRandomSpan = () => {
  const spans = [1, 2];
  return spans[Math.floor(Math.random() * spans.length)];
};

const getRandomText = () => {
  const texts = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Integer nec odio",
    "Praesent libero",
    "Sed cursus ante dapibus diam",
    "Nulla quis sem at nibh elementum imperdiet",
    "Duis sagittis ipsum",
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

const Page2 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(`.${styles.gridItem}`);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.scrollItem}>
        <div className={styles.buttonContainer}>
          <a href="#hero" className={styles.goBackButton}>
            ←
          </a>
        </div>
      </div>
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className={styles.scrollItem}>
          <div className={styles.gridContainer}>
            {Array.from({ length: 6 }).map((_, gridIndex) => (
              <div
                key={gridIndex}
                className={styles.gridItem}
                style={{
                  backgroundImage: `url(${images[gridIndex % images.length]})`,
                  gridColumnEnd: `span ${getRandomSpan()}`,
                  gridRowEnd: `span ${getRandomSpan()}`,
                }}
              >
                {getRandomText()}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page2;
