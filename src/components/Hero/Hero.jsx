import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import heroImage from "../../../assets/hero/herox.jpg";

export const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Sai Tejas", "Full Stack Developer", "ML Enthusiast"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I am <span ref={el} className={styles.typed}></span>
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Third-year Information Technology undergraduate with a strong foundation in Full Stack Development and Machine Learning.
        </motion.p>

        <motion.div
          className={styles.buttonGroup}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="/Sai_Tejas_Repala.pdf"
            className={styles.contactBtn}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Resume Download
          </a>
        </motion.div>
      </div>

      <motion.img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
