import styles from "./skills.module.css";

const skillsData = [
  {
    title: "Web Development",
    description:
      "Proficient in HTML, CSS, JavaScript, and modern web frameworks like React and Angular. Skilled in building responsive and user-friendly web applications.",
  },
  {
    title: "Web Design",
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Mobile Applications",
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Trading and Investing",
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Sales",
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Marketing",
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
];

const Skills = () => {
  const skillElements = skillsData.map((data, index) => (
    <div key={index} className={styles.skillContainer}>
      <span className={styles.title}>{data.title}</span>
      <p className={styles.description}>{data.description}</p>
    </div>
  ));

  return (
    <div>
      <h1 className={styles.title}>What am I doing?</h1>
      <div className={styles.container}>{skillElements}</div>
    </div>
  );
};

export default Skills;
