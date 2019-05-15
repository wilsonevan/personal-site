import React from "react";
import styled from "styled-components";
import {
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

import SkillView from "./SkillView";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <MySecondaryText>Full Stack Web Developer</MySecondaryText>
        <MySecondaryText>& Computer Engineer</MySecondaryText>
        <SkillView rating={5} name={"Reactjs"} />
        <SkillView rating={5} name={"Ruby on Rails"} />
        <SkillView rating={4} name={"Raw SQL"} />
        <SkillView rating={4} name={"HTML/CSS"} />
        <SkillView rating={3} name={"C"} />
        <SkillView rating={3} name={"Javascript"} />
        <SkillView rating={3} name={"Assembly"} />
        <SkillView rating={3} name={"PostgreSQL"} />
        <SkillView rating={2} name={"Python"} />
        <SkillView rating={2} name={"Matlab"} />
      </SkillsContainer>
    </>
  );
};

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;

  background-color: ${globalColors.PrimaryWhite};
`;

const MySecondaryText = styled(SecondaryText)`
  margin: 0;
  padding: 0.5rem;
`

export default Skills;
