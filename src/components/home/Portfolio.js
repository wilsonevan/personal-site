import React from "react";
import styled from "styled-components";
import { SecondContainer } from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";
// import Iframe from "react-iframe";
import ProjectView from "./ProjectView";
import beakrLogo from "../../images/beakr_logo.svg";
import AGLogo from "../../images/AG LOGO Vector-COM.jpg";

const Portfolio = () => {
  return (
    <ProjectsContainer>
      <PortfolioHeader>Portfolio</PortfolioHeader>
      <EachProject>
        <ProjectView
          title={"Beakr LMS for Coding Bootcamps"}
          github={"https://github.com/devpointlabs/beakr"}
          url={"https://beakr-dpl.herokuapp.com/"}
          instructions={[
            "1. Remember you may need to wait 15s for the server to boot up.",
            "2. Login as test@test.com to view teacher views.",
            "3. Login as evanstudent@test.com to view student view."
          ]}
          logo={beakrLogo}
          skills={["Reactjs", "Ruby on Rails", "Raw SQL","PostgreSQL", "HTML/CSS", "Twilio", "Cloudinary", "Chart.js", "Devise", "Styled Components"]}
        />
        <ProjectView
          title={"Audio-Grenade Website & Store"}
          github={"https://github.com/wilsonevan/audio_grenade3"}
          url={"https://dev-audio-grenade.netlify.com/"}
          logo={AGLogo}
          skills={["Reactjs","HTML/CSS", "BigCommerce", "Freshworks","Styled Components"]}
        />
      </EachProject>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled(SecondContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PortfolioHeader = styled.h1`
  margin-top: 3rem;
  color: ${globalColors.PrimaryOrange};
  text-decoration: underline;
`;

const EachProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* height: 20rem; */
  /* width: 20rem; */
  /* padding: 1rem; */
`;

export default Portfolio;
