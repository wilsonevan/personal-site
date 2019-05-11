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
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;
  margin: 1rem 2rem 1rem 2rem;
  padding: 0.5rem;
  height: 25rem;
  width: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 3px 3px rgba(100, 100, 100, 0.1);

  :hover {
    background-color: ${globalColors.SecondaryBlue};
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

const ProjectHeader = styled.h2`
  margin: 0;
`;

const ProjectDescription = styled.h3`
  margin: 0;
`;

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
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  flex-wrap: wrap;
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
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px 3px rgba(100, 100, 100, 0.1);
  padding: 0.5rem 1rem 0.5rem 1rem;
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
  padding: 1rem;
  /* max-width: 40%; */
`;
const InstructionsHeader = styled.h3`
  text-align: center;
  padding: 0.2rem;
  text-decoration: underline;
  margin: 0;

`;
const Instructions = styled.h4`
  padding: 0.5rem;
  margin: 0;

`;

export default ProjectView;
