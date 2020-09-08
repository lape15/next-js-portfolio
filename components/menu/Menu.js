import { useContext, useState } from "react";
import Link from "next/link";
import styles from "./menu.module.css";
import { MenuContext } from "../../context/MenuContext";

const Menu = () => {
  //   const { showMenu, handleMenu } = useContext(MenuContext);

  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu);
  return (
    <>
      <div className={styles.menu_btn}>
        <div
          className={` ${styles.hamburger} ${showMenu ? styles.open : ""}`}
          onClick={handleMenu}
        ></div>
      </div>
      <div
        className={`${styles.menu_box} ${showMenu ? styles.show : styles.hide}`}
      >
        <div className={`${styles.item_box} `}>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.about : styles.item_one
              }`}
            >
              About{" "}
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.projects : styles.item_two
              }`}
            >
              Projects
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.skills : styles.item_three
              }`}
            >
              Skills
            </a>
          </Link>
          <Link href="/">
            <a
              className={`${styles.menu_item} ${
                showMenu ? styles.contact : styles.item_four
              }`}
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
