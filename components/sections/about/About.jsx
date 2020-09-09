import { useEffect, useState } from "react";
import styles from "./about.module.css";

const About = (props) => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  useEffect(() => {
    const interval = setTimeout(handleLoading(), 2000);
    loading ? console.log("Hey") : console.log("What is you doing");
    // props.AOS.init({
    //   //   duration: 2000,
    // });

    return () => clearInterval(interval);
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
        <div data-aos="slide-up">
          <span className={styles.text}>
            I am a front-end developer and for more a year now, software has
            been the central piece of my world. On this fast and mind-blowing
            journey, I have moved over the years from being a novice to a pretty
            decent front-end developer. I am very passionate about shit.
          </span>
        </div>
      </div>
      <div className={styles.sec_two}>Image leaves here papi</div>
    </section>
  );
};

export default About;
