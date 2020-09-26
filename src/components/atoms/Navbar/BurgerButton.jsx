import React from "react";
import classnames from "classnames";

import styles from "./Navbar.module.scss";

function BurgerButton({ isActive, onClick }) {
  const burgerClass = classnames(styles["navbar-burger"], styles["burger"], {
    [styles["is-active"]]: isActive,
  });
  return (
    <div
      className={burgerClass}
      aria-label="menu"
      aria-expanded="false"
      onClick={onClick}
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </div>
  );
}

export default BurgerButton;
