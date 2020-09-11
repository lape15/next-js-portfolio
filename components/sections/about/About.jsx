import { useEffect, useState } from "react";
import styles from "./about.module.css";

const About = (props) => {
  const [loading, setLoading] = useState(false);

  const listenScrollEvent = (e) => {
    console.log(window.scrollY);
    if (window.scrollY >= 180) {
      setLoading(true);
    } else if (window.scrollY < 400) {
      setLoading(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.sec_one}>
        <h2
          className={`${styles.head} ${
            loading ? styles.clear : styles.un_clear
          }`}
          data-aos="slide-up"
        >
          About Me 👋
        </h2>
        <div data-aos="fade-up-right">
          <span
            className={`${styles.text} ${
              loading ? styles.clear : styles.un_clear
            }`}
          >
            I am a front-end developer and for more a year now, software has
            been the central piece of my world. On this fast and mind-blowing
            journey, I have moved over the years from being a novice to a pretty
            decent front-end developer. I am profficient in front-end languages
            and their various frameworks I build like to build beatufiful user
            interfaces.
          </span>
        </div>
      </div>
      <div className={styles.sec_two} data-aos="fade-up"></div>
    </section>
  );
};

export default About;
