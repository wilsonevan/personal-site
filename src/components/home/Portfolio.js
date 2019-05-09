import React from "react";
import styled from "styled-components";
import { SecondContainer } from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";
import Iframe from "react-iframe";
import ProjectView from "./ProjectView";

const Portfolio = () => {
  return (
      <ProjectsContainer>
        <PortfolioHeader>Portfolio</PortfolioHeader>
        <EachProject>
          <ProjectView
            title={"Beaker LMS for Coding Bootcamps"}
            git={"https://github.com/devpointlabs/beakr"}
            url={"https://beakr-dpl.herokuapp.com/"}
            instructions={[
              "1. Remember you may need to wait 15s for the serve to boot up.",
              "2. Login as test@test.com to view teacher views",
              "3. Login as evanstudent@test.com to view student view"
            ]}
          />
          <ProjectView
            title={"Audio Grenade Website"}
            git={"https://github.com/devpointlabs/beakr"}
            url={"https://beakr-dpl.herokuapp.com/"}
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
