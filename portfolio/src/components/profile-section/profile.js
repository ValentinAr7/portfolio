import React from "react";
import styles from "./profile.module.css";
import profileImage from "../../../public/logo.png";

const Profile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profileSection}>
        <img src={profileImage} />
      </div>
    </div>
  );
};

export default Profile;
