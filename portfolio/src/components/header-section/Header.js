import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./header.module.css";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.navLink}>
        <Button className={styles.navBtn}>Home</Button>
      </Link>

      <Button
        className={styles.navBtn}
        onClick={() => scrollToSection("about")}
      >
        About Me
      </Button>
      <Button
        className={styles.navBtn}
        onClick={() => scrollToSection("resume")}
      >
        Resume
      </Button>
      <Button
        className={styles.navBtn}
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </Button>
      <Button
        className={styles.navBtn}
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </Button>
    </div>
  );
};

export default Header;
