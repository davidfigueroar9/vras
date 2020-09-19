import React from "react";
import PropTypes from "prop-types";
import noop from "lodash/noop";

import getStyles from "./getStyles";

function ButtonLink({
  children,
  color,
  href,
  isDisabled,
  isFullWidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  size,
  target,
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
    <a className={buttonClassNames} href={href} target={target}>
      {children}
    </a>
  );
}

ButtonLink.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isInverted: PropTypes.bool,
  isLight: PropTypes.bool,
  isLoading: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isRounded: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  target: PropTypes.string,
};

ButtonLink.defaultProps = {
  children: "",
  color: "",
  isDisabled: false,
  isFullWidth: false,
  isInverted: false,
  isLight: false,
  isLoading: false,
  isOutlined: false,
  isRounded: false,
  onClick: noop,
  size: "",
  target: "",
};

export default ButtonLink;
