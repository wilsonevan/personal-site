import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/cortona_creative_logo_no_background.png";
import scrollToComponent from "react-scroll-to-component";
import { globalColors, globalSizes } from "../styles/GlobalStyles";
import { Icon, Button, Dropdown } from "semantic-ui-react";

// import logo from "../images/logos/AG Grenade Only Transparent.svg";
// import { Button, Icon, Sidebar, Menu } from "semantic-ui-react";

const Navbar = props => {
  // const { toggleMenu, setToggleMenu } = setState(false);

  return (
    <NavContainer>
      <CompactNavMenu>
        <Dropdown button className="icon" size="huge" fluid icon="bars">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link
                onClick={() =>
                  scrollToComponent(props.refs[0], {
                    offset: 0,
                    align: "top",
                    ease: "inOutCube",
                    duration: 1500
                  })
                }
                style={{ maxWidth: "15rem" }}
              >
                <Item>How We Work</Item>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                onClick={() =>
                  scrollToComponent(props.refs[1], {
                    offset: 0,
                    align: "top",
                    ease: "inOutCube",
                    duration: 1500
                  })
                }
                style={{ maxWidth: "15rem" }}
              >
                <Item>About Us</Item>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                onClick={() =>
                  scrollToComponent(props.refs[2], {
                    offset: 0,
                    align: "top",
                    ease: "inOutCube",
                    duration: 1500
                  })
                }
                style={{ maxWidth: "15rem" }}
              >
                <Item>Portfolio</Item>
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link
                onClick={() =>
                  scrollToComponent(props.refs[3], {
                    offset: 0,
                    align: "top",
                    ease: "inOutCube",
                    duration: 1500
                  })
                }
                style={{ maxWidth: "15rem" }}
              >
                <Item>Contact Us</Item>
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </CompactNavMenu>

      <ExpandedNavMenu>
        <Logo src={logo} alt="CCLogo" />
        <Link
          onClick={() =>
            scrollToComponent(props.refs[0], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }
          style={{ maxWidth: "20rem" }}
        >
          <MenuItem>
            <Item>How We Work</Item>
          </MenuItem>
        </Link>
        <Link
          onClick={() =>
            scrollToComponent(props.refs[1], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }
          style={{ maxWidth: "15rem" }}
        >
          <MenuItem>
            <Item>About Us</Item>
          </MenuItem>
        </Link>
        <Link
          onClick={() =>
            scrollToComponent(props.refs[2], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }
          style={{ maxWidth: "15rem" }}
        >
          <MenuItem>
            <Item>Portfolio</Item>
          </MenuItem>
        </Link>
        <Link
          onClick={() =>
            scrollToComponent(props.refs[3], {
              offset: 0,
              align: "top",
              ease: "inOutCube",
              duration: 1500
            })
          }
          style={{ maxWidth: "15rem" }}
        >
          <MenuItem>
            <Item>Contact</Item>
          </MenuItem>
        </Link>
      </ExpandedNavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0rem;
  left: 1rem;
  /* width: 100%; */
  z-index: 10;
  padding-top: 2rem;
  padding-left: 2rem;
`;

const MenuItem = styled.div`
  float: left;
  font-size: 1rem;
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
  font-weight: 500 !important;
  /* z-index: -10; */

  :hover {
    color: ${globalColors.PrimaryRed};
    transition: 0.2s ease-in-out;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 6rem;
  margin: 10px 16px 5px 16px;
`;

const ExpandedNavMenu = styled.div`
  list-style-type: none;
  /* margin-left: 2rem;
  margin-top: 2rem; */
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: ${globalSizes.ScreenWidth}) {
    display: none;
  }
`;

const CompactNavMenu = styled.div`
  display: none;
  width: 10rem;
  height: 5rem;

  @media (max-width: ${globalSizes.ScreenWidth}) {
    display: inline;
  }
`;

export default Navbar;
