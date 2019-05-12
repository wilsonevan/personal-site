import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { globalColors } from "../../styles/GlobalStyles";
import profileImage from "../../images/IMG_1776.jpg";
import LinkedInIcon from "../../images/In-Blue-96.png";
import GitHubIcon from "../../images/GitHub-Mark-64px.png";

const Networking = () => {
  return (
    <NetworkingContainer>
      <SectionHeader>Connect</SectionHeader>
      <ContactContainer>
        <ProfilePic src={profileImage} alt="profileImage" />
        <NameContainer>
          <Name fontWeight={"900"}>Evan Wilson, </Name>
          <Name fontWeight={"500"}>Product Guy</Name>
        </NameContainer>
        <ItemContainer>
          <Icon size={"large"} name={"map marker alternate"} />
          <Description>Salt Lake City, UT</Description>
        </ItemContainer>
        <ItemContainer>
          <Icon size={"large"} name={"phone"} />
          <Description>+1-801-664-7172</Description>
        </ItemContainer>
        <ItemContainer>
          <Icon size={"large"} name={"mail"} />
          <Description>evan@cortonacreative.com</Description>
        </ItemContainer>
        <ItemContainer>
          <CompanyIcon src={LinkedInIcon} alt="linkedInIcon" />
          <SupportLink
            href="https://www.linkedin.com/in/wilson-evan/"
            target="_blank"
          >
            <Description>https://www.linkedin.com/in/wilson-evan/</Description>
          </SupportLink>
        </ItemContainer>
        <ItemContainer>
          <CompanyIcon src={GitHubIcon} alt="GitHubIcon" />
          <SupportLink
            href="https://github.com/wilsonevan"
            target="_blank"
          >
          <Description>https://github.com/wilsonevan</Description>
          </SupportLink>
        </ItemContainer>
      </ContactContainer>
    </NetworkingContainer>
  );
};

const NetworkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const SectionHeader = styled.h1``;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;
`;

const ProfilePic = styled.img`
  max-width: 400px;
  height: auto;
  margin: 0;
  padding: 0;
  opacity: 0.85;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const NameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
`;

const Name = styled.h4`
  font-weight: ${props => props.fontWeight || 600} !important;
  margin: 0;
  margin-left: 0.4rem;
  font-size: 1.5rem;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem;
  border-top: 1px solid ${globalColors.SecondaryGrey};
  margin: 0;
  width: 100%;
  padding-left: 2rem;
`;

const Description = styled.h4`
  margin: 0;
  padding-left: 1rem;
`;

const CompanyIcon = styled.img`
  margin: 0;
  width: 20px;
  height: auto;
`;

const SupportLink = styled.a``;

export default Networking;
