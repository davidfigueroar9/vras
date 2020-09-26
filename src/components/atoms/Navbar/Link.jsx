import React from "react";

import styles from "./Navbar.module.scss";

function Link({ children, href = "#" }) {
  return (
    <a className={styles["navbar-item"]} href={href}>
      {children}
    </a>
  );
}

export default Link;
