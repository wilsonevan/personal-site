import React, { useRef } from "react";
import scrollToComponent from "react-scroll-to-component";
import Particles from "react-particles-js";
import { particleParams, particleStyles } from "../../styles/ParticlesStyles";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import image1 from "../../images/barca_4_cropped.jpg";
import {
  PageContainer,
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";

import Navbar from "./Navbar";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Overview from "../philosophy/Overview";
import ContactView from "../contact/ContactView";

class Home extends React.Component {
  render() {
    return (
      <>
        <PageContainer>
          <Navbar
            refs={[this.Philosophy, this.About, this.Projects, this.Contact]}
          />
          {/* <MyButton
            onClick={() =>
              scrollToComponent(this.About, {
                offset: 0,
                align: "top",
                duration: 1500
              })
            }
          /> */}
          <section
            ref={section => {
              this.Top = section;
            }}
          >
            <MyTopContainer>
              <Particles params={particleParams} style={particleStyles} />
              <DescriptionContainer>
                <MySecondaryText>
                  Strengthening our community by improving opportunities for
                  lifelong learning through technology.
                </MySecondaryText>
                <MyPrimaryText>Cortona Creative</MyPrimaryText>
              </DescriptionContainer>
              <Link
                onClick={() =>
                  scrollToComponent(this.Philosophy, {
                    offset: 0,
                    align: "top",
                    ease: "inOutCube",
                    duration: 1000
                  })
                }
              >
                <NextSlide>
                  <Icon
                    size="huge"
                    color="grey"
                    fitted
                    name="angle double down"
                  />
                </NextSlide>
              </Link>
            </MyTopContainer>
          </section>
          <section
            ref={section => {
              this.Philosophy = section;
            }}
          >
            <Overview
              refs={[this.Philosophy, this.About, this.Projects, this.Contact]}
            />
          </section>
          <section
            ref={section => {
              this.About = section;
            }}
          >
            <Profile />
          </section>
          <section
            ref={section => {
              this.Projects = section;
            }}
          >
            <Portfolio />
          </section>
          <section
            ref={section => {
              this.Contact = section;
            }}
          >
            <ContactView />
          </section>
        </PageContainer>
      </>
    );
  }
}

// const LeftTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   color: white;
//   margin-left: 18vw;
//   margin-top: 45vh;
// `;

const MyTopContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: #a9d3f8;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

const MyButton = styled.button`
  position: absolute;
  top: 100px;
  width: 200px;
  height: 100px;

  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

const MyPrimaryText = styled(PrimaryText)`
  text-align: center;
  font-size: 6rem !important;
  width: 50rem;
  margin: 0;
`;

const MySecondaryText = styled(SecondaryText)`
  text-align: center;
  width: 40rem;
  line-height: 1.5em;
  font-size: 2.2rem;
  /* background-color: rgba(255,255,255,0.3); */
  /* box-shadow:  0 0 50px rgba(255,255,255,0.3); */
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${globalColors.SecondaryBlue};
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

export default Home;
