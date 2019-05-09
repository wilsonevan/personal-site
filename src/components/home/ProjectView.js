import React from "react";
import styled from "styled-components";
import { globalColors } from "../../styles/GlobalStyles";

const ProjectView = props => {
  return (
    <EachProject>
      <ProjectHeader>{props.title}</ProjectHeader>
      <ProjectDetails>
        <LinksContainer>
          <Link>
            <LinkHeader>Website</LinkHeader>
            <LinkText>{props.url}</LinkText>
          </Link>
          <Link>
            <LinkHeader>GitHub</LinkHeader>
            <LinkText>{props.git}</LinkText>
          </Link>
        </LinksContainer>
        {props.instructions ? (
          <InstructionsContainer>
            <InstructionsHeader>Instructions</InstructionsHeader>
            {props.instructions.map(instruction => {
              return <Instructions>{instruction}</Instructions>;
            })}
          </InstructionsContainer>
        ) : (
          <></>
        )}
      </ProjectDetails>
    </EachProject>
  );
};

const EachProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid ${globalColors.PrimaryBlue};
  margin: 3rem;
  padding: 3rem;
  /* max-width: 40%; */
`;

const ProjectDetails = styled.div`
  display: flex;
  justify-content: center;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectHeader = styled.h2``;

const Link = styled.div`
  padding: 1rem;
`;

const LinkHeader = styled.h3`
  text-align: center;
`;

const LinkText = styled.h4`
  text-align: center;
  background-color: ${globalColors.PrimaryGreen};
  padding: 0.5rem 1rem 0.5rem 1rem;
  border-radius: 0.4rem;
  opacity: 0.8;
  
`;

const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem;
  max-width: 40%;
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
