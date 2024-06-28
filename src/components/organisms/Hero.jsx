// src/components/organisms/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Card from "../molecules/Card";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.hero}>
        <Card header="Header 1" subheader="Subheader 1" link="#page1" />
        <Card header="Header 2" subheader="Subheader 2" link="#page2" />
        <Card header="Header 3" subheader="Subheader 3" link="#page3" />
        <Card header="Header 4" subheader="Subheader 4" link="#page4" />
      </div>
    </div>
  );
};

export default Hero;
