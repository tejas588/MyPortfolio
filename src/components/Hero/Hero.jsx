import React, { useEffect } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/herox.jpg"; 

export const Hero = () => {
  useEffect(() => {
    const typed = new window.Typed("#typed-name", {
      strings: ["Sai Tejas", "a Developer", "a Student"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup
  }, []);

  return (
    
    <section className={styles.container}>
      
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I am <span id="typed-name" className={styles.typed}></span>
        </h1>

        <p className={styles.description}>
          I am currently Pursuing my B. Tech in Manipal Institute of Technology Bangalore (3rd year).
        </p>
        

        <div className={styles.buttonGroup}>
          <a
            href="/SAI_TEJAS_REPALA.pdf"
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume Download
          </a>
          
        </div>
        
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
