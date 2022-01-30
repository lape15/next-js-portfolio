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
  },[]);
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.sec_one}>
        <h2
          className={`${styles.head} ${
            loading ? styles.clear : styles.un_clear
          }`}
          data-aos="zoom-in-up"
        >
          About Me
        </h2>
        <div data-aos="zoom-in-up">
          <span
            className={`${styles.text} ${
              loading ? styles.clear : styles.un_clear
            }`}
          >
            I am a detail-perfect frontend developer driven by the desire to create functional and easy-to-use general solutions to specific problems using tech (and whatever else is necessary). With over 3 years of experience, I have worked on multiple challenging projects as a frontend developer. I am always eager to learn and understand different opinions and methods of reasoning, and I love exploring new technologies while delivering excellent products on the job.

          </span>
        </div>
      </div>
      <div className={styles.skill_list}>
        <h3 className={styles.skill_title} data-aos="zoom-in-up">
          Skills
        </h3>
        <ul className={styles.left_skill} data-aos="fade-up-right">
          <ol className={styles.skill} data-aos="flip-up">
            CSS3
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
           JavaScript
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
           Typescript
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            SASS
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            REACT
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            HTML5
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Next js
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
           Angular 1
          </ol>
        </ul>
        <ul className={styles.right_skill} data-aos="fade-up-left">
          <ol className={styles.skill} data-aos="flip-up">
            GraphQL
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Testing
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Redux toolkit
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
          Node js
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Express
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Github
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            Redux
          </ol>
          <ol className={styles.skill} data-aos="flip-up">
            TailwindCss
          </ol>
        </ul>
        <div></div>
      </div>
    </section>
  );
};

export default About;
