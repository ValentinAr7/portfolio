import styles from "./education.module.css";

const educationData = [
  {
    title: "Ulster University",
    type: "Bachelors degree, Computer Science, First Class (93%)",
    town: "Belfast, Northern Ireland (2019 - 2022)",
    description: "Ulster university is my bachelor degree in Northern Ireland.",
  },
  {
    title: "South West College",
    type: "Level 1 to 5, Computer Science, Triple Distinction (97%)",
    town: "Enniskillen, Northern Ireland (2016 - 2019)",
    description:
      "South West College is where I pursued my Computer Science diploma.",
  },
  {
    title: "Soft Uni",
    type: "Full JavaScript Path",
    town: "Sofia, Bulgaria, 2022",
    description: "I completed the Full JavaScript Path at Soft Uni in 2022.",
  },
];

const Education = () => {
  const educations = educationData.map((data, index) => (
    <div key={index} className={styles.education}>
      <p className={styles.college}>{data.title}</p>
      <p className={styles.type}>{data.type}</p>
      <span className={styles.town}>{data.town}</span>
      <p className={styles.description}>{data.description}</p>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h1 id="resume" className={styles.heading}>
        Education
      </h1>
      <div className={styles.education}>{educations}</div>
    </div>
  );
};

export default Education;
