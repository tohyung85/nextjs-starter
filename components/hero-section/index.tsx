import React from "react";
import styles from "./hero-section.module.scss";

export default function HeroSection() {
  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.contentContainer}
        style={{
          backgroundImage:
            "url(" + require("../../public/images/flower.jpg") + ")",
        }}
      >
        Hero section
      </div>
    </div>
  );
}
