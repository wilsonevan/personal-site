import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/cortona_creative_logo_OW_background.png";
import scrollToComponent from "react-scroll-to-component";
import { globalColors } from "../styles/GlobalStyles";


// import logo from "../images/logos/AG Grenade Only Transparent.svg";
// import { Button, Icon, Sidebar, Menu } from "semantic-ui-react";

const Navbar = props => {
  return (
    <NavContainer>
      <NavMenu>
        <Logo src={logo} alt="CCLogo" />
        <Link onClick={() =>
            scrollToComponent(props.refs[0], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }>
          <MenuItem>
            <Item>About Us</Item>
          </MenuItem>
        </Link>
        <Link onClick={() =>
            scrollToComponent(props.refs[1], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }>
          <MenuItem>
            <Item>Portfolio</Item>
          </MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>
            <Item>Contact</Item>
          </MenuItem>
        </Link>
      </NavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
`;

const MenuItem = styled.div`
  float: left;
  font-size: 1.25rem;
  z-index: 1;

  :hover {
    cursor: pointer;
  }
`;

const Item = styled.h2`
  display: block;
  text-align: center;
  padding: 10px 16px 5px 16px;
  text-decoration: none;
  /* z-index: -10; */

  :hover {
    color: ${globalColors.PrimaryRed};
    transition: 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 8rem;
  margin: 10px 16px 5px 16px;
`;

const NavMenu = styled.div`
  list-style-type: none;
  margin-left: 3rem;
  margin-top: 3rem;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export default Navbar;
