// src/pages/Page4.jsx
import React from "react";
import styles from "./Page4.module.css";

const Page4 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.scrollItem}>
        <div className={styles.buttonContainer}>
          <a href="#hero" className={styles.goBackButton}>
            ←
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page4;
