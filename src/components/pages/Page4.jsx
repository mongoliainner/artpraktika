// src/pages/Page4.jsx
import React from "react";
import styles from "./Page4.module.css";

const Page4 = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          src="https://yuexex.github.io/typography/"
          title="Embedded Webpage"
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

export default Page4;
