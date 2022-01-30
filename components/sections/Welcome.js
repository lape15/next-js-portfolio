import Image from 'next/image'
import styles from "./welcome.module.css";
import laps from '../../public/images/laps.JPG'

const HomeIndex = (props) => {
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
          data-aos="zoom-out-up"
        >
          i am a software Engineer living in Lagos.
        </div>
        <div className={styles.text} data-aos="slide-up">
          <p data-aos="zoom-out-up">I am very passionate about technology.</p>
          <p data-aos="zoom-out-up">Feel free to say hi &#128075;</p>
          <button className={styles.btn}>
            <a href="mailto:lape.akintan@gmail.com" className={styles.link}>
              {" "}
              Hi &#128075;
            </a>
          </button>
        </div>
      </div>

      <div className={styles.side_two}>
        <Image
          src={laps}
          alt="lady"
          className={styles.img}
          data-aos="zoom-out-up"
          data-aos-delay="150"
        />
      </div>
    </section>
  );
};

export default HomeIndex;
