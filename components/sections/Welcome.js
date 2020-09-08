import { useTrail, animated } from "react-spring";
import { useEffect, useState } from "react";
import styles from "./welcome.module.css";

const HomeIndex = () => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    setLoading(true);
  };
  useEffect(() => {
    handleLoading();
    const interval = setTimeout(() => {
      console.log("We are loading" + loading);
    }, 3000);
    5;
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className={styles.part_one}>
      <div className={styles.intro}> Hi, my name is Lape</div>
      <div
        className={styles.glitch}
        data-text=" i am a software Engineer living in Lagos."
      >
        i am a software Engineer living in Lagos.
      </div>
      <p>Nigeria and i am very passionate about technology.</p>
      <p>Feel free to say hi &#128075;</p>
    </section>
  );
};

export default HomeIndex;
