import React from "react";

import styles from "./Navbar.module.scss";

function Brand({ children }) {
  return <div className={styles["navbar-brand"]}>{children}</div>;
}

export default Brand;
