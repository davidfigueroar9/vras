import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import getStyles from "./getStyles";

function Button({
  children,
  color,
  isDisabled,
  isFullWidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  onClick,
  size,
}) {
  const buttonClassNames = getStyles({
    color,
    isDisabled,
    isFullWidth,
    isInverted,
    isLight,
    isLoading,
    isOutlined,
    isRounded,
    size,
  });

  return (
    <button className={buttonClassNames} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.string,
  isInverted: PropTypes.bool,
  isLight: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
};

Button.defaultProps = {
  children: "",
  color: "",
  isDisabled: false,
  isFullWidth: "",
  isInverted: false,
  isLight: false,
  isLoading: false,
  isOutlined: false,
  isRounded: false,
  onClick: noop,
  size: "",
};

export default Button;
