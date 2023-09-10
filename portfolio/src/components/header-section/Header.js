import { Button } from "@mui/material";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Button className={styles.navBtn}>About Me</Button>
      <Button className={styles.navBtn}>Resume</Button>
      <Button className={styles.navBtn}>Experiance</Button>
      <Button className={styles.navBtn}>Projects</Button>
    </div>
  );
};

export default Header;
