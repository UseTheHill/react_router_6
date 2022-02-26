import React from "react";
import styles from "../src/Navbar.module.scss";

export default function Navbar() {
  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.items}>Home</li>
        <li className={styles.items}>Services</li>
        <li className={styles.items}>Contact</li>
      </ul>
      <button className={styles.button}>BTN</button>
    </nav>
  );
}
