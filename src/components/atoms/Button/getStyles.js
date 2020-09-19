import classnames from "classnames";
import styles from "./Button.module.scss";

export default function getStyles({
  color,
  isDisabled,
  isFullWidth,
  isInverted,
  isLight,
  isLoading,
  isOutlined,
  isRounded,
  size,
}) {
  const buttonClassNames = classnames(styles.button, {
    [styles["is-light"]]: isLight,
    [styles[`is-${color}`]]: !!color,
    [styles[`is-${size}`]]: !!size,
    [styles["is-disabled"]]: isDisabled,
    [styles["is-fullWidth"]]: isFullWidth,
    [styles["is-inverted"]]: isInverted,
    [styles["is-loading"]]: isLoading,
    [styles["is-outlined"]]: isOutlined,
    [styles["is-rounded"]]: isRounded,
  });

  return buttonClassNames;
}
