// src/pages/Page1.jsx
import React, { useEffect } from "react";
import styles from "./Page1.module.css";

const getRandomSpan = () => {
  const spans = [1, 2];
  return spans[Math.floor(Math.random() * spans.length)];
};

const getRandomText = () => {
  const texts = [
    "Downloaded immortality. Now my existential crisis is eternal.", // Plays on the idea of digital immortality and its potential consequences.
    "Used to write on cave walls. Now trapped in a digital cave of endless scrolling.", // Compares the information age to a digital cave.
    "Robots taking our jobs? Great, now who will existential dread with?", // Humorously explores the fear of job displacement by robots.
    "Cloud storage? More like a cosmic landfill for our digital ghosts.", // Questions the permanence of digital data.
    "Following influencers online. Lost in the algorithm, found myself.", // Satirizes the influence of social media algorithms.
    "Siri, what is the meaning of life? 'Beep boop, buy more products.'",

    "Infinity? Just a really long nap.", // A play on the concept of eternal nothingness.
    "Lost my keys. Now lost in existence. Thanks, keys.", // Humorously links everyday frustrations to existential dread.
    "Bought a self-help book on death. First page blank.", // Pokes fun at the limitations of self-help in the face of mortality.
    "Life: a waiting room with a broken clock.", // Emphasizes the feeling of timelessness and absurdity.
    "Sunsets: beautiful reminders we're all burning stars.", // Combines beauty with a touch of cosmic dread.
    "Cheese dreams? Or just a premonition of the dairy afterlife?", // Injects humor into the unknown.
  ];
  return texts[Math.floor(Math.random() * texts.length)];
};

const Page1 = () => {
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

export default Page1;
