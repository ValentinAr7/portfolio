import React from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/about" className={styles.navLink}>
        About Me
      </Link>
      <Link to="/education" className={styles.navLink}>
        Education
      </Link>
      <Link to="/experience" className={styles.navLink}>
        Experience
      </Link>
      <Link to="/projects" className={styles.navLink}>
        Projects
      </Link>
    </div>
  );
};

export default Header;
