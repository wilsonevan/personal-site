import React from "react";
import styled from "styled-components";
import { globalColors } from "../../styles/GlobalStyles";
import SkillCard from "./SkillCard";

const ProjectView = props => {
  return (
    <ProjectContainer>
      <EachProject>
        <ProjectDetails>
          <Logo src={props.logo} alt="CCLogo" />
          <ProjectHeader>{props.title}</ProjectHeader>
          <ProjectDescription />
        </ProjectDetails>
        <SkillsContainer>
          {props.skills.map(skill => {
            return <SkillCard skill={skill} />;
          })}
        </SkillsContainer>
      </EachProject>
      <LinksContainer>
        {props.instructions ? (
          <InstructionsContainer>
            <InstructionsHeader>Quick Instructions</InstructionsHeader>
            {props.instructions.map(instruction => {
              return <Instructions>{instruction}</Instructions>;
            })}
          </InstructionsContainer>
        ) : (
          <></>
        )}
        <ButtonsContainer>
          <SupportLink href={props.url} target="_blank">
            <LinkButton>View Site</LinkButton>
          </SupportLink>
        </ButtonsContainer>
        <ButtonsContainer>
          <SupportLink href={props.github} target="_blank">
            <LinkButton>GitHub</LinkButton>
          </SupportLink>
        </ButtonsContainer>
      </LinksContainer>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  border: 1px solid ${globalColors.PrimaryBlue};
  border-radius: 0.5rem;
  margin: 3rem;
  padding: 3rem;
  height: 30rem;
  width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${globalColors.PrimaryBlue};
    transition: background-color 0.2s linear;
  }
`;

const EachProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  ${ProjectContainer}:hover & {
    display: none;
  }
`;

const ProjectHeader = styled.h2``;

const ProjectDescription = styled.h3``;

const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`;

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 10px 16px 5px 16px;
`;


const SkillsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;

  ${ProjectContainer}:hover & {
    display: inline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const SupportLink = styled.a``;

const LinkButton = styled.button`
  /* padding: 1rem; */
  background-color: ${globalColors.PrimaryGreen};
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.4rem;
  opacity: 0.8;
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

const LinkHeader = styled.h3`
  text-align: center;
`;

const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  /* max-width: 40%; */
`;
const InstructionsHeader = styled.h2`
  text-align: center;
  padding: 0.2rem;
  text-decoration: underline;
`;
const Instructions = styled.h4`
  padding: 0.5rem;
`;

export default ProjectView;
