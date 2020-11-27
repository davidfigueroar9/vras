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
          <Link href="/">
            <Logo />
          </Link>
          <BurgerButton onClick={toggleMenu} isActive={isActive} />
        </Brand>
        <Menu
          isActive={isActive}
          start={
            <>
              <Link href="/">Home</Link>
              <Item isHoverable hasDropdown>
                <Link href="category">Damas</Link>
                <Dropdown>
                  <Link href="detail">Blusas</Link>
                  <Link href="detail">Vestidos</Link>
                  <Link href="detail">Bragas</Link>
                  <Divider />
                  <Link>Shores</Link>
                  <Link>Joggers</Link>
                  <Link>Leggins</Link>
                  <Link>Maxipant</Link>
                </Dropdown>
              </Item>
              <Item isHoverable hasDropdown>
                <Link>Caballeros</Link>
                <Dropdown>
                  <Link>Shores</Link>
                  <Link>Joggers</Link>
                  <Link>Franelas</Link>
                </Dropdown>
              </Item>
              <Item isHoverable hasDropdown>
                <Link>Niñ@s</Link>
                <Dropdown>
                  <Link>Franelas/Camisas</Link>
                  <Link>Shores</Link>
                  <Link>Joggers</Link>
                  <Link>Leggins</Link>
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
