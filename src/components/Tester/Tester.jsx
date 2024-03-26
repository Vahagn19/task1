import React from "react";
import styles from "./tester.module.css";

export const Tester = () => {
  return (
    <div className={styles.container}>

      <div className={styles.example1}>
        <div className={styles.header1}>header1</div>
        <div className={styles.body1}>body1</div>
      </div>

      <div className={styles.example2}>
        <h2 className={styles.header2}>header2</h2>
        <div className={styles.body2}>body2</div>
      </div>
    </div>
  );
};
