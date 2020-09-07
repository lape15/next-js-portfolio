import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu_box}>
      <div className={styles.menu_btn}>
        <div className={styles.hamburger}></div>
      </div>
      <div className={`${styles.item_box} `}>
        <Link href="/">
          <a className={styles.menu_item}>Home </a>
        </Link>
        <Link href="/">
          <a className={styles.menu_item}>About </a>
        </Link>
        <Link href="/">
          <a className={styles.menu_item}>Projects</a>
        </Link>
        <Link href="/">
          <a className={`${styles.menu_item} ${styles.pink}`}>Contact </a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
