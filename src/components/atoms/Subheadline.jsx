import React from "react";
import styles from "./Subheadline.module.css";

const Subheadline = ({ children, className }) => {
  return <h2 className={`${styles.subheadline} ${className}`}>{children}</h2>;
};

export default Subheadline;
