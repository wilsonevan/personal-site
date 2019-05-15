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
        <MySecondaryText>Product Management</MySecondaryText>
        <SkillView rating={5} name={"Project Management"} />
        <SkillView rating={5} name={"Technical Customer Support"} />
        <SkillView rating={4} name={"Technical Sales"} />
        <SkillView rating={3} name={"QA/QC Validation"} />
        <SkillView rating={3} name={"Product Marketing"} />
        <SkillView rating={3} name={"Backend Architecture"} />
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

const MySecondaryText = styled(SecondaryText)`
  margin: 0;
  padding: 0.5rem;
  font-weight: 800 !important;
  margin-bottom: 0.5rem;

`

export default Skills;
