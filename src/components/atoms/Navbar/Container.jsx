import React from "react";

import styles from "./Navbar.module.scss";

function Container({ children }) {
  return <div className={styles["container"]}>{children}</div>;
}

export default Container;
