import React from "react";
import { motion } from "framer-motion";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
// Import images
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";
import instagramIcon from "../../../assets/contact/Instagram.png";

export const Contact = () => {
  return (
    <motion.footer
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=saitejasrepala@gmail.com">Mail</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sai-tejas-repala/">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/tejas588">Github</a>
        </li>
        <li className={styles.link}>
          <img src={instagramIcon} alt="Instagram icon" />
          <a href="https://www.instagram.com/tejas_588/">Instagram</a>
        </li>
      </ul>
    </motion.footer>
  );
};