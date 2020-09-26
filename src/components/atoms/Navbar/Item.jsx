import React from "react";
import classnames from "classnames";

import styles from "./Navbar.module.scss";

function Item({ children, hasDropdown, isHoverable }) {
  const NavItemClass = classnames(styles["navbar-item"], {
    [styles["has-dropdown"]]: hasDropdown,
    [styles["is-hoverable"]]: isHoverable,
  });
  return <div className={NavItemClass}>{children}</div>;
}

export default Item;
