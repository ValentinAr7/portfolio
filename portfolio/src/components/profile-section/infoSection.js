import React from "react";
import styles from "./infoSection.module.css";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const InfoSection = () => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.email}>
        <EmailIcon className={styles.icon} />
        <div className={styles.details}>
          <span>Email:</span>
          <p>valio990210@gmail.com</p>
        </div>
      </div>

      <div className={styles.phone}>
        <PhoneIcon className={styles.icon} />
        <div className={styles.details}>
          <span>Phone Number:</span>
          <p>🇧🇬 +359 886 102 888</p>
          <p>🇬🇧 +44 7555 778 521</p>
        </div>
      </div>

      <div className={styles.linkedin}>
        <LinkedInIcon className={styles.icon} />
        <div className={styles.details}>
          <a
            href="https://www.linkedin.com/in/valentin-arnautski-a022181b9/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", width: "200px" }}
          >
            LinkedIn Account
          </a>
        </div>
      </div>

      <div className={styles.github}>
        <GitHubIcon className={styles.icon} />
        <div className={styles.details}>
          <a
            href="https://github.com/ValentinAr7"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", width: "200px" }}
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
