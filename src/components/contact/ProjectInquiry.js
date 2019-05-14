import React from "react";
import styled from "styled-components";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

const ProjectInquiry = () => {
  return (
    <SectionContainer>
      <SectionHeader>Or Want to Start a New Project?</SectionHeader>
      <DetailsContainer>
        <SectionDetails>Send an email to:</SectionDetails>
        <EmailDetails>evan@cortonacreative.com</EmailDetails>
      </DetailsContainer>
      <DetailsContainer>
        <SectionDetails>With the following info:</SectionDetails>
      </DetailsContainer>
      <DetailsList>
        <ListItem>
          <h2>Short Description of your project</h2>
        </ListItem>
        <ListItem>
          <h2>Estimated timeline</h2>
        </ListItem>
        <ListItem>
          <h2>Contact info</h2>
        </ListItem>
      </DetailsList>
      <SectionDetails>
        And I will follow up with you personally within 48 hours.
      </SectionDetails>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  max-width: 50%;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    max-width: 80%;
  }
`;
const SectionHeader = styled.h1`
  padding-bottom: 3rem;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
`;
const SectionDetails = styled.h2`
  margin: 0;
`;

const EmailDetails = styled.h2`
  margin: 0;
  margin-left: 1rem;
  color: ${globalColors.PrimaryRed};
`;

const DetailsList = styled.ul`
  margin-left: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  letter-spacing: 1.25px !important;
  color: ${globalColors.PrimaryGrey} !important;
`;

export default ProjectInquiry;
