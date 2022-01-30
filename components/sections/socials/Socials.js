import { useEffect, useState } from "react";
import styles from "./socials.module.css";

const Socials = () => {
  const [load, setLoad] = useState(false);
  const changeLoad = () => {
    setLoad(!load);
  };

  useEffect(() => {
    const interval = setTimeout(changeLoad, 2500);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className={`${styles.socials} ${load ? styles.in : styles.away}`}>
      <div className={styles.social_icons}>
        <div className={styles.panel}>
          <a
            href="https://www.twitter.com/lappiey"
            className={styles.link}
            title="Twitter"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div className={styles.panel}>
          <a
            href="https://www.linkedin.com/in/alarape-akintan-a80188188/"
            className={styles.link}
            title="Linkedin"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className={styles.panel}>
          <a
            href="https://www.github.com/lape15"
            className={styles.link}
            title="Github"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className={styles.panel}>
          <a href="mailto:lape.akintan@gmail.com" className={styles.link}>
            <i className="fas fa-envelope-open"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
