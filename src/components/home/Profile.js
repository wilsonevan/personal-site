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
import { globalColors } from "../../styles/GlobalStyles";

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
          <AboutText>Here is something about me.</AboutText>
          <AboutText>Here is more about me.</AboutText>
        </AboutContainer>
      </ProfileContainer>
    </SecondContainer>
  );
};

const AboutHeader = styled(PrimaryText)`
  color: ${globalColors.PrimaryOrange};
  margin-left: 3rem;
  position: relative;
  min-width: 400px;
  max-height: 100px;
  top: 400px;
  left: 0;

  /* Rotate from top left corner (not default) */
  transform-origin: 0% 0%;
  transform: rotate(270deg);
`;

const ProfileContainer = styled.div``;

const ProfileImage = styled.img`
  /* margin-top: 3rem;
  margin-bottom: 3rem; */
  height: 80vh;
  width: auto;
  opacity: 0.85;
  position: relative;
  right: 300px;
`;

const NameContainer = styled.div`
  margin-top: 3rem;
  position: relative;
  right: 30rem;
`;

const ProfileName = styled(PrimaryText)`
  color: ${globalColors.PrimaryRed};
  padding: 0;
  text-transform: uppercase;
  font-size: 5rem !important;
  font-weight: 1000;
  letter-spacing: 0.2rem !important;
  position: relative;
  left: ${props => props.leftIndent || 0};
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  right: 300px;
  padding: 3rem;
`;

const AboutText = styled.h3``;

export default Profile;
