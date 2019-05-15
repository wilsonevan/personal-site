import React from "react";
import styled from "styled-components";
import { SecondaryText } from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

import SkillView from "./SkillView";

const Skills = () => {
  return (
    <>
      <SkillsContainer>
        <TextContainer>
          <MySecondaryText>Full Stack Web Developer</MySecondaryText>
          <MySecondaryText>& Computer Engineer</MySecondaryText>
        </TextContainer>
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
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  margin: 0.5rem;
  height: 42rem;
  min-width: 25rem;

  /* width: 25rem; */

  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;

  background-color: ${globalColors.PrimaryWhite};
  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    height: 35rem;
  }
`;

const TextContainer = styled.div`
  padding: 0.5rem;
  margin-bottom: 0.8rem;
`;

const MySecondaryText = styled(SecondaryText)`
  margin: 0;
  line-height: 2rem;
  text-align: center;
  font-weight: 800 !important;
`;

export default Skills;
