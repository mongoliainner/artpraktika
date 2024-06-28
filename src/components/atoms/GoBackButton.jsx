// src/components/atoms/GoBackButton.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GoBackButton.module.css";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button className={styles.goBackButton} onClick={() => navigate(-1)}>
      ←
    </button>
  );
};

export default GoBackButton;
