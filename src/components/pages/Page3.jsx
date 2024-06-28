// src/pages/Page3.jsx
import React from "react";
import styles from "./Page3.module.css";

const Page3 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://yuexex.github.io/typography/"
          title="Embedded Webpage 1"
          className={styles.iframe}
        ></iframe>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#hero" className={styles.goBackButton}>
          ←
        </a>
      </div>
    </div>
  );
};

export default Page3;
