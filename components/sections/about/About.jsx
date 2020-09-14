import { useEffect, useState } from "react";
import styles from "./about.module.css";

const About = (props) => {
  const [loading, setLoading] = useState(false);

  const listenScrollEvent = (e) => {
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
          About Me
        </h2>
        <div data-aos="slide-up">
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
            interfaces.With profficiency in :
          </span>
        </div>
      </div>
      <div className={styles.skill_list}>
        <ul className={styles.left_skill} data-aos="fade-up-right">
          <ol className={styles.skill}>CSS3</ol>
          <ol className={styles.skill}>SASS</ol>
          <ol className={styles.skill}>REACT</ol>
          <ol className={styles.skill}>HTML5</ol>
          <ol className={styles.skill}>Next js</ol>
        </ul>
        <ul className={styles.right_skill} data-aos="fade-up-left">
          <ol className={styles.skill}>GraphQL</ol>
          <ol className={styles.skill}>Testing</ol>
          <ol className={styles.skill}>Github</ol>
          <ol className={styles.skill}>Redux</ol>
          <ol className={styles.skill}>TailwindCss</ol>
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default About;
