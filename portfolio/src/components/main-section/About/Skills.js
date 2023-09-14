import styles from "./skills.module.css";
import CodeIcon from "@mui/icons-material/Code"; // Import the Code icon
import WebDevelopmentIcon from "@mui/icons-material/Code"; // Import the Web Development icon
import WebDesignIcon from "@mui/icons-material/DesignServices"; // Import the Web Design icon
import MobileApplicationsIcon from "@mui/icons-material/PhoneAndroid";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CampaignIcon from "@mui/icons-material/Campaign";

const skillsData = [
  {
    title: "Web Development",
    icon: <WebDevelopmentIcon fontSize="large" />,
    description:
      "Proficient in HTML, CSS, JavaScript, and modern web frameworks like React and Angular. Skilled in building responsive and user-friendly web applications.",
  },
  {
    title: "Web Design",
    icon: <WebDesignIcon fontSize="large" />,
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Mobile Applications",
    icon: <MobileApplicationsIcon fontSize="large" />,
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Trading and Investing",
    icon: <MonetizationOnIcon fontSize="large" />,
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Sales",
    icon: <AttachMoneyIcon fontSize="large" />,
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
  {
    title: "Marketing",
    icon: <CampaignIcon fontSize="large" />,
    description:
      "Experienced in digital marketing strategies, including SEO, SEM, social media marketing, and email marketing. Strong analytical skills to measure and optimize campaign performance.",
  },
];

const Skills = () => {
  const skillElements = skillsData.map((data, index) => (
    <div key={index} className={styles.skillContainer}>
      <p className={styles.icon}>{data.icon}</p>
      <div>
        <span className={styles.heading}>{data.title}</span>
        <p className={styles.description}>{data.description}</p>
      </div>
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
