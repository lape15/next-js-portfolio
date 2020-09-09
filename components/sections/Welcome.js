import { useTrail, animated } from "react-spring";
import { useEffect, useState } from "react";
import styles from "./welcome.module.css";

const HomeIndex = (props) => {
  console.log(props.AOS);
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  useEffect(() => {
    handleLoading();
    props.AOS.init();
  });
  return (
    <section className={styles.part_one}>
      <div className={styles.side_one}>
        <div className={styles.intro} data-aos="slide-up">
          {" "}
          Hi, my name is Lape
        </div>
        <div
          className={styles.glitch}
          data-text=" i am a software Engineer living in Lagos."
          data-aos="flip-up"
        >
          i am a software Engineer living in Lagos.
        </div>
        <div className={styles.text} data-aos="slide-up">
          <p data-aos="zoom-out-up">I am very passionate about technology.</p>
          <p data-aos="zoom-out-up">Feel free to say hi &#128075;</p>
          <button className={styles.btn}>Hi &#128075;</button>
        </div>
      </div>

      <div className={styles.side_two}>
        <img
          src="/images/laps.JPG"
          alt="lady"
          className={styles.img}
          data-aos="zoom-out-up"
        />
      </div>
    </section>
  );
};

export default HomeIndex;
