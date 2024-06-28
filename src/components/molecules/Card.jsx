// src/components/molecules/Card.jsx
import React from "react";
import styles from "./Card.module.css";
import Headline from "../atoms/Headline";
import Subheadline from "../atoms/Subheadline";

const Card = ({ header, subheader }) => {
  return (
    <div className={styles.card}>
      <Headline>{header}</Headline>
      <Subheadline>{subheader}</Subheadline>
    </div>
  );
};

export default Card;
