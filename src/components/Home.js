import React, { useRef } from "react";
import scrollToComponent from "react-scroll-to-component";

import { Icon, Loader, Dimmer } from "semantic-ui-react";
import { Link } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import {
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../styles/GlobalComponents";
import { globalColors, globalSizes } from "../styles/GlobalStyles";

import Navbar from "./Navbar";
import Intro from "./Intro";
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
        </DimmerContainer>
        <PageContainer loaded={this.state.loaded}>
          <Navbar
            refs={[this.Philosophy, this.About, this.Projects, this.Contact]}
          />
          <section
            ref={section => {
              this.Top = section;
            }}
          >
            <Intro
              refs={[this.About]}
              updateLoader={this.updateLoader}
              loaded={this.state.loaded}
            />
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



export default Home;
