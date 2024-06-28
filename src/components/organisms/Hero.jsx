// src/components/organisms/Hero.jsx
import React from "react";
import styles from "./Hero.module.css";
import Card from "../molecules/Card";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Card header="disk.party" subheader="" />
      <Card header="disk.sound" subheader="some ambient works" />
      <Card header="art" subheader="" />
      <Card header="runway" subheader="" />
    </section>
  );
};

export default Hero;
