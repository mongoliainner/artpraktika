import React from "react";
import styles from "./Headline.module.css";

const Headline = ({ children, className }) => {
  return <h1 className={`${styles.headline} ${className}`}>{children}</h1>;
};

export default Headline;
