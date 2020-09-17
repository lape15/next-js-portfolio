import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo_footer}>
        <a href="mailto:lape.akintan@gmail.com" className={styles.link}>
          Made by Lape
        </a>
      </div>
    </div>
  );
};

export default Footer;
