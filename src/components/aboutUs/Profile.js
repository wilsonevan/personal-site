import React from "react";
import styled from "styled-components";
import profileImage from "../../images/evan_profile.jpg";
import {
  PageContainer,
  PrimaryText,
  SecondaryText,
  TopContainer,
  SecondContainer
} from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

const Profile = () => {
  return (
    <SecondContainer>
      <AboutHeader>About Us</AboutHeader>
      <ProfileImage src={profileImage} alt="profileImage" />
      <ProfileContainer>
        <NameContainer>
          <ProfileName>Evan</ProfileName>
          <ProfileName leftIndent={"3rem;"}>Wilson</ProfileName>
        </NameContainer>
        <AboutContainer>
          <AboutText fontWeight={"bold"}>Here is something about me.</AboutText>
          <AboutText>Here is more about me.</AboutText>
        </AboutContainer>
      </ProfileContainer>
    </SecondContainer>
  );
};

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

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    margin: 0;
    /* height: auto;
    max-width: 50vw; */
  }
`;

export default Profile;
