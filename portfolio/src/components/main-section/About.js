import styles from "./about.module.css";
import aboutImage from "../../images/about.png";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 id="about" className={styles.heading}>
        About Me
      </h1>
      <div className={styles.contentContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.textContainer}>
            <p className={styles.description}>
              Hey there <span className={styles.icon}>👋</span> ! I'm a software
              and web developer <span className={styles.icon}>💻</span> with a
              knack for{" "}
              <strong className={styles.boldText}>
                turning big ideas into reality
              </strong>
              <span className={styles.icon}>💡</span>
              . <br />
              I'm <strong className={styles.boldText}>passionate</strong> about
              creating <span className={styles.icon}>🎯</span> efficient
              solutions that make a{" "}
              <strong className={styles.boldText}>real difference</strong>.{" "}
            </p>
          </div>
          <div className={styles.imageContainer}>
            <img
              src={aboutImage}
              alt="about image"
              className={styles.aboutImage}
            />
          </div>
        </div>

        <div className={styles.skillsContainer}>
          <h3 className={styles.subtitle}>Skills and Achievements</h3>
          <p className={styles.description}>
            I'm a proud <strong className={styles.boldText}>graduate</strong>{" "}
            <span className={styles.icon}>👨‍🎓</span> of Ulster University in the
            beautiful city of Belfast, Northern Ireland{" "}
            <span className={styles.icon}>🇬🇧</span>. I pursued my passion for
            technology <span className={styles.icon}>🖥️</span> by{" "}
            <strong className={styles.boldText}>
              earning a degree in Computer Science{" "}
              <span className={styles.icon}>📜</span>.
            </strong>
            <br />
          </p>

          <p className={styles.description}>
            I've always had a{" "}
            <strong className={styles.boldText}>thirst for knowledge</strong>{" "}
            <span className={styles.icon}>📚</span> and a drive to excel in the
            ever-evolving world <span className={styles.icon}>🌏</span> of
            technology and business. To stay ahead of the curve,{" "}
            <strong className={styles.boldText}>
              I've completed numerous courses and academies.
            </strong>{" "}
            <br /> <br />
            Moreover, I've had the privilege of participating in{" "}
            <strong className={styles.boldText}>
              mentorship programs
            </strong>{" "}
            <span className={styles.icon}>🧳</span>
            focused on{" "}
            <strong className={styles.boldText}>
              e-commerce, business strategies, and marketing,
            </strong>{" "}
            which gave me valuable insights. <br /> <br /> My commitment to
            continuous learning and professional growth fuels
            <span className={styles.icon}>⛽️</span>
            my passion for creating innovative solutions and achieving success
            in the fast-paced tech industry
            <span className={styles.icon}>✔️</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
