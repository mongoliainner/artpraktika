// src/components/organisms/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Card from "../molecules/Card";

const Hero = () => {
  return (
    <div className={styles.heroContainer} id="hero">
      <div className={styles.hero}>
        <Card header="go digital" subheader="avoid reality" link="#page1" />
        <Card
          header="reflect"
          subheader="what have you become?"
          link="#page2"
        />
        <Card header="Header 3" subheader="Subheader 3" link="#page3" />
        <Card header="about" subheader="Subheader 4" link="#page4" />
      </div>
    </div>
  );
};

export default Hero;
