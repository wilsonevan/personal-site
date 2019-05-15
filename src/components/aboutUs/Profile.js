import React from "react";
import styled from "styled-components";
import profileImage from "../../images/evan_profile.jpg";
import {
  PrimaryText,
  SecondaryText,
  SecondContainer
} from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

class Profile extends React.Component {
  render() {
    return (
      <MySecondContainer>
        <AboutHeader>About Me</AboutHeader>
        <ProfileImage
          src={profileImage}
          alt="profileImage"
          onLoad={() => this.props.updateLoader(0)}
        />
        <ProfileContainer>
          <NameContainer>
            <ProfileName>Evan</ProfileName>
            <ProfileName leftIndent={"3rem;"}>Wilson</ProfileName>
          </NameContainer>
          <AboutContainer>
            <AboutText fontWeight={"bold"}>
              My dream is to inspire lifelong learning, advance knowledge, and
              strengthen my community through teaching truth and cultivating
              grit. In order to do this, I plan to utilize the power of software
              in order to build products which empower individuals around the
              world.
            </AboutText>
            <AboutText>
              Education is by far one of the most effective means for unlocking
              new opportunities for an individual to achieve their full
              potential. It is also the key to improving the living conditions
              of those in developing countries or even poor urban areas. I am
              dedicated to building tools designed for those who are willing to
              take the risk themselves and learn new skills that will help them
              lead their communities from within.
            </AboutText>
          </AboutContainer>
        </ProfileContainer>
      </MySecondContainer>
    );
  }
}

const MySecondContainer = styled(SecondContainer)`
  position: relative;
  background-color: ${globalColors.PrimaryWhite} !important;
  /* z-index: 10; */
`

const AboutHeader = styled(PrimaryText)`
  /* color: ${globalColors.PrimaryRed}; */
  margin-left: 3rem;
  position: relative;
  min-width: 500px;
  max-height: 100px;
  top: 150px;
  left: 0;
  /* text-decoration: underline; */

  /* Rotate from top left corner (not default) */
  transform-origin: 0% 0%;
  transform: rotate(270deg);

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    transform-origin: 0% 0%;
    transform: rotate(0deg);
    margin-left: 0rem;
    position: relative;
    min-width: 300px;
    max-height: 100px;
    top: 0px;
    left: 0px;
    text-align: center;
    };
`;

const ProfileContainer = styled.div``;

const ProfileImage = styled.img`
  /* margin-top: 3rem;
  margin-bottom: 3rem; */
  /* height: auto;
  width: auto; */
  width: 500px;
  height: 500px;
  opacity: 0.85;
  position: relative;
  right: 400px;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    right: 0px;
    height: auto;
    max-width: 50vw;
  }

  @media only screen and (max-width: 500px) {
    right: 0px;
    height: auto;
    max-width: 80vw;
  }
`;

const NameContainer = styled.div`
  margin-top: 3rem;
  position: relative;
  right: 360px;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    right: 0px;
    margin-top: 1rem;
  }
`;

const ProfileName = styled(SecondaryText)`
  color: ${globalColors.PrimaryBlue};
  padding: 0;
  text-transform: uppercase;
  font-size: 5rem !important;
  font-weight: 1000;
  letter-spacing: 0.2rem !important;
  position: relative;
  left: ${props => props.leftIndent || 0};

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    left: 0;
    margin: 0;
    text-align: center;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  right: 400px;
  padding: 3rem;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    right: 0px;
    padding: 1rem;
    /* height: auto;
    max-width: 50vw; */
  }
`;

const AboutText = styled.h3`
  font-weight: ${props => props.fontWeight || "lighter"} !important;
  width: 50vw;
  margin-top: 0.5rem;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    margin: 0;
    /* height: auto;
    max-width: 50vw; */
  }
`;

export default Profile;
