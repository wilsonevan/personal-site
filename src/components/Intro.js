import React from "react";
import styled, { keyframes } from "styled-components";
import Particles from "react-particles-js";
import { particleParams, particleStyles } from "../styles/ParticlesStyles";
import scrollToComponent from "react-scroll-to-component";
import { globalColors, globalSizes } from "../styles/GlobalStyles";
import {
  PrimaryText,
  SecondaryText,
} from "../styles/GlobalComponents";

import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Intro extends React.Component {
  render() {
    return (
      <>
        <MyTopContainer>
          {this.props.loaded && (
            <ParticlesContainer>
              <Particles params={particleParams} style={particleStyles} />
            </ParticlesContainer>
          )}
          <DescriptionContainer>
            <MySecondaryText>
              Strengthening my community by improving opportunities for lifelong
              learning through technology.
            </MySecondaryText>
            <MyPrimaryText>Cortona Creative</MyPrimaryText>
          </DescriptionContainer>
          <Link
            onClick={() =>
              scrollToComponent(this.props.refs[0], {
                offset: 0,
                align: "top",
                ease: "inOutCube",
                duration: 1000
              })
            }
          >
            <NextSlide>
              <Icon size="huge" color="grey" fitted name="angle double down" />
            </NextSlide>
          </Link>
        </MyTopContainer>
      </>
    );
  }
}

const ParticlesContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const MyTopContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: #a9d3f8;
  border-bottom-width: 3px;
  border-bottom-style: solid;
  /* z-index: -1; */
`;

const DescriptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-bottom: 1px solid ${globalColors.SecondaryBlue};
`;

const MyPrimaryText = styled(PrimaryText)`
  text-align: center !important;
  font-size: 6rem !important;
  width: 60%;
  margin: 0;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    width: 80%;
  }
`;

const MySecondaryText = styled(SecondaryText)`
  text-align: center;
  width: 40%;
  line-height: 1.5em;
  font-size: 2.2rem;
  font-weight: 500 !important;
  /* background-color: rgba(255,255,255,0.3); */
  /* box-shadow:  0 0 50px rgba(255,255,255,0.3); */
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${globalColors.SecondaryBlue};

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    width: 80%;
  }
`;

const pulse = keyframes`
  0% {
    -moz-box-shadow: 0 0 0 0 ${globalColors.SecondaryBlue};
    box-shadow: 0 0 0 0 ${globalColors.SecondaryBlue};
  }
  70% {
      -moz-box-shadow: 0 0 0 40px rgba(204,169,44, 0);
      box-shadow: 0 0 0 40px rgba(204,169,44, 0);
  }
  100% {
      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);
      box-shadow: 0 0 0 0 rgba(204,169,44, 0);
  }
}
`;

const NextSlide = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  box-shadow: 0 0 0 rgba(204, 169, 44, 0.4);
  animation: ${pulse} 2s infinite;
  height: 2px;
  width: 2px;
  border-radius: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Intro;
