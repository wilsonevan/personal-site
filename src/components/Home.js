import React, { useRef } from "react";
import scrollToComponent from "react-scroll-to-component";
import Particles from "react-particles-js";
import { particleParams, particleStyles } from "../styles/ParticlesStyles";
import { Icon, Loader, Dimmer } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import image1 from "../images/barca_4_cropped.jpg";
import {
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../styles/GlobalComponents";
import { globalColors, globalSizes } from "../styles/GlobalStyles";

import Navbar from "./Navbar";
import Profile from "./aboutUs/Profile";
import Portfolio from "./portfolio/Portfolio";
import Overview from "./philosophy/Overview";
import ContactView from "./contact/ContactView";

class Home extends React.Component {
  state = { totalImages: 2, imageArr: [], loaded: false };

  componentDidMount() {
    // Intiailize the ImageArr by populating with ALL FALSE values
    var newArr = [];
    for (var i = 0; i < this.state.totalImages; i = i + 1) {
      newArr.push(false);
    }
    this.setState({ imageArr: newArr });
  }

  updateLoader = n => {
    var newArr = this.state.imageArr;
    newArr[n] = true;

    this.setState({ imageArr: newArr }, () => {
      // Once the state has been updated with the new array, test for whether the entire array is loaded.
      if (
        !this.state.imageArr.find(function(element) {
          return false;
        })
      ) {
        this.setState({ loaded: true });
      }
    });
  };

  render() {
    return (
      <>
        <DimmerContainer loaded={this.state.loaded}>
          <Loader active inline="centered" />
        </DimmerContainer >
        <PageContainer loaded={this.state.loaded}>
          <Navbar
            refs={[this.Philosophy, this.About, this.Projects, this.Contact]}
          />
          <section
            ref={section => {
              this.Top = section;
            }}
          >
            <MyTopContainer>
              {this.state.loaded && (
                <ParticlesContainer>
                  <Particles params={particleParams} style={particleStyles} />
                </ParticlesContainer>
              )}
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
            <Profile updateLoader={this.updateLoader} />
          </section>
          <section
            ref={section => {
              this.Projects = section;
            }}
          >
            <Portfolio updateLoader={this.updateLoader} />
          </section>
          <section
            ref={section => {
              this.Contact = section;
            }}
          >
            <ContactView updateLoader={this.updateLoader} />
          </section>
        </PageContainer>
      </>
    );
  }
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* display: ${props => (props.loaded ? "initial" : "none")}; */
  visibility: ${props => (props.loaded ? "visible" : "hidden")};
  opacity: ${props => (props.loaded ? 1 : 0)};

  transition: visibility 1s, opacity 1.5s linear;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    align-items: center;
  }
`;

const ParticlesContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const DimmerContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: ${props => (props.loaded ? "none" : "flex")};
  opacity: 0.5;
  justify-content: center;
  align-items: center;
  background-color: ${globalColors.PrimaryWhite} !important;
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
  width: 60%;
  margin: 0;
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
