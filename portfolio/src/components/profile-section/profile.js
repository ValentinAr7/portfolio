import React from "react";
import styles from "./profile.module.css";
import profileImage from "../../images/logo.png";
import InfoSection from "./infoSection";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <img src={profileImage} alt="Logo" className={styles.profileImage} />
        <h2>Valentin Arnautski</h2>
        <p className={styles.role}>SOFTWARE ENGINEER</p>
        <div className={styles.separator}></div>
      </div>

      <InfoSection />
    </div>
  );
};

export default Profile;
