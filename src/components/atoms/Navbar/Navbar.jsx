import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Brand from "./Brand";
import BurgerButton from "./BurgerButton";
import Container from "./Container";
import Divider from "./Divider";
import Dropdown from "./Dropdown";
import Item from "./Item";
import Link from "./Link";
import Logo from "../Logo";
import Menu from "./Menu";

import styles from "./Navbar.module.scss";

function Navbar({ children }) {
  const [isActive, setActive] = useState(false);
  const toggleMenu = () => {
    setActive(!isActive);
  };

  const navbarClass = classnames(styles.navbar, {
    [styles["has-shadow"]]: false,
  });
  return (
    <nav className={navbarClass} role="navigation" aria-label="main navigation">
      <Container>
        <Brand>
          <Link>
            <Logo />
          </Link>
          <BurgerButton onClick={toggleMenu} isActive={isActive} />
        </Brand>
        <Menu
          isActive={isActive}
          start={
            <>
              <Link>Home</Link>
              <Link>Documentation</Link>
              <Item isHoverable hasDropdown>
                <Link>More</Link>
                <Dropdown>
                  <Link>About</Link>
                  <Link>Jobs</Link>
                  <Link>Contact</Link>
                  <Divider />
                  <Link>Report an issue</Link>
                </Dropdown>
              </Item>
            </>
          }
          end={<Item>hola</Item>}
        />
      </Container>
    </nav>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

Navbar.Brand = Brand;
Navbar.BurgerButton = BurgerButton;
Navbar.Container = Container;
Navbar.Divider = Divider;
Navbar.Dropdown = Dropdown;
Navbar.Item = Item;
Navbar.Link = Link;

export default Navbar;
