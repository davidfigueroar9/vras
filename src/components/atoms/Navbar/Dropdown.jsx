import React from "react";

import styles from "./Navbar.module.scss";

function Dropdown({ children }) {
  return <div className={styles["navbar-dropdown"]}>{children}</div>;
}
export default Dropdown;
