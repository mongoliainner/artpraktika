// src/pages/Page2.jsx
import React, { useEffect } from "react";
import styles from "./Page2.module.css";

const getRandomSpan = () => {
  const spans = [1, 2];
  return spans[Math.floor(Math.random() * spans.length)];
};

const getRandomText = () => {
  const texts = [
    "Digital art is not about creating perfect images; it's about creating new ones.",
    "The computer is not just a tool; it's a new medium for art.",
    "Digital art allows us to explore new forms of expression and to create art that was never before possible.",
    "Digital art is not about replacing traditional art; it's about expanding the possibilities of art.",
    "Digital art is democratizing art, making it more accessible to everyone.",
    "The future of art is digital.",
    "Digital art is still in its early stages, but it has the potential to revolutionize the way we create and experience art.",
    "Digital art is a powerful tool for storytelling and social commentary.",
    "Digital art is challenging our traditional notions of what art is and can be.",
    "Digital art is here to stay, and it's changing the world.",
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
