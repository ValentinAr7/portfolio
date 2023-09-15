import React from "react";
import styles from "./education.module.css";

const educationData = [
  {
    title: "Ulster University ",
    type: "Bachelors degree, Computer Science, First Class (93%)",
    town: "Belfast, Northern Ireland (2019 - 2022)",
    content: "Ulster university is my bachelor degree in Northern Ireland.",
  },
  {
    title: "South West College",
    type: "Level 1 to 5, Computer Science, Triple Distinction (97%)",
    town: "Enniskillen, Northern Ireland (2016 - 2019)",
    content:
      "South West College is where I pursued my Computer Science diploma.",
  },
  {
    title: "Soft Uni",
    type: "Full JavaScript Path",
    town: "Sofia, Bulgaria, 2022",
    content: "I completed the Full JavaScript Path at Soft Uni in 2022.",
  },
];

const Education = () => {
  const timelineElements = educationData.map((data, index) => (
    <div
      key={index}
      className={`${styles.container} ${
        index % 2 === 0 ? styles.left : styles.right
      }`}
    >
      <div className={styles.content}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.town}>{data.town}</p>
        <p className={styles.type}>{data.type}</p>
        <p>{data.content}</p>
      </div>
    </div>
  ));

  return <div className={styles.timeline}>{timelineElements}</div>;
};

export default Education;
