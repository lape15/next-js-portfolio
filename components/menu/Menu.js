import { useContext } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import { MenuContext } from "../../context/MenuContext";

const Menu = () => {
  const { state, dispatch } = useContext(MenuContext);

  console.log(state);
  return (
    <div className={styles.menu_box}>
      <div className={styles.menu_btn}>
        <div
          className={styles.hamburger}
          onClick={() =>
            dispatch({
              type: "CHANGE_MENU",
            })
          }
        ></div>
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
