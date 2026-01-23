import React from "react";
import { motion } from "framer-motion";

import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Skills = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <motion.div
          className={styles.skills}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, id) => {
            return (
              <motion.div key={id} className={styles.skill} variants={itemVariants}>
                <div className={styles.skillImageContainer}>
                  <img src={`/skills/${skill.imageSrc}`} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};