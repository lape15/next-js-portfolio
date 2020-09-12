import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import { MenuContext } from "../../context/MenuContext";

const Menu = () => {
  const [changeMenu, setChangeMenu] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  const listenScrollEvent = (e) => {
    if (window.scrollY >= 1100) {
      // alert(window.scrollY);
      setChangeMenu(true);
      console.log(changeMenu);
    } else if (window.scrollY < 1200) {
      setChangeMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <>
      <div className={styles.menu_btn}>
        <div
          className={` ${styles.hamburger} ${showMenu ? styles.open : ""} ${
            changeMenu ? styles.bg_white : ""
          }`}
          onClick={handleMenu}
        ></div>
      </div>
      <div
        className={`${styles.menu_box} ${
          showMenu ? styles.show : styles.hide
        } ${changeMenu ? styles.bg_white : ""}`}
      >
        <div className={`${styles.item_box} `}>
          <Link href="#about">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.about : styles.item_one
              } ${changeMenu ? styles.bg_white : ""}`}
              onClick={handleMenu}
            >
              About{" "}
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.projects : styles.item_two
              } ${changeMenu ? styles.bg_white : ""}`}
              onClick={handleMenu}
            >
              Projects
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.skills : styles.item_three
              } ${changeMenu ? styles.bg_white : ""}`}
              onClick={handleMenu}
            >
              Skills
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.contact : styles.item_four
              } ${changeMenu ? styles.bg_white : ""}`}
              onClick={handleMenu}
            >
              Contact{" "}
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
