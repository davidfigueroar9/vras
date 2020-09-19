import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Container.module.scss";

function Container({ children, isFluid }) {
  const containerClass = classnames(styles.container, {
    [styles["is-fluid"]]: isFluid,
  });
  return <div className={containerClass}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isFluid: PropTypes.bool,
};

export default Container;
