import React from "react";
import classnames from "classnames";

import styles from "./Navbar.module.scss";

function Menu({ isActive, start, end }) {
  const navbarMenuClass = classnames(styles["navbar-menu"], {
    [styles["is-active"]]: isActive,
  });
  return (
    <div className={navbarMenuClass}>
      <div className={styles["navbar-start"]}>{start}</div>
      <div className="navbar-end">{end}</div>
    </div>
  );
}

export default Menu;
