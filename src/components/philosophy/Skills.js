import React from "react";
import styled from "styled-components";
import {
  SecondaryText,
} from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

import SkillCard from '../portfolio/SkillCard'

const Skills = () => {
  return (
    <>
      <OuterSkillsContainer>
        <MySecondaryText>Specializing In:</MySecondaryText>
        <InnerSkillsContainer>
        <SkillCard skill={"Reactjs"} />
        <SkillCard skill={"Ruby on Rails"} />
        <SkillCard skill={"Raw SQL"} />
        <SkillCard skill={"HTML/CSS"} />
        <SkillCard skill={"C"} />
        <SkillCard skill={"Javascript"} />
        <SkillCard skill={"Assembly"} />
        <SkillCard skill={"PostgreSQL"} />
        <SkillCard skill={"Python"} />
        <SkillCard skill={"Matlab"} />
        </InnerSkillsContainer>
      </OuterSkillsContainer>  
    </>
  );
};

const OuterSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem;
  margin: 0.5rem;
  min-height: 20rem;
  min-width: 50vw;
  width: 50rem;

  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;

  background-color: ${globalColors.PrimaryWhite};

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    max-width: none;
  }
`;

const InnerSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`


const MySecondaryText = styled(SecondaryText)`
  margin: 0;
  padding: 0.3rem;
  font-weight: 800 !important;
  /* margin-bottom: 0.5rem; */

`

export default Skills;
