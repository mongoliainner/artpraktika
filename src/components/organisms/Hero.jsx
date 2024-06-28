// src/components/organisms/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Card from "../molecules/Card";

const Hero = () => {
  return (
    <div className={styles.heroContainer} id="hero">
      <div className={styles.hero}>
        <Card header="poetry" subheader="" link="#page1" />
        <Card header="gallery" subheader="" link="#page2" />
        <Card header="reflect" subheader="" link="#page3" />
        <Card header="connect" subheader="" link="#page4" />
      </div>
    </div>
  );
};

export default Hero;
