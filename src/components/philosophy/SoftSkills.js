import React from "react";
import styled from "styled-components";
import { SecondaryText } from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

import SkillView from "./SkillView";
import SkillCard from "../portfolio/SkillCard";

const Skills = () => {
  return (
    <>
      <OuterSkillsContainer>
        <MySecondaryText>Utilizing:</MySecondaryText>
        <InnerSkillsContainer>
          <SkillCard skill={"Agile Project Management"} />
          <SkillCard skill={"QA Automation"} />
          <SkillCard skill={"Integrated Analytics & Intelligence"} />
          <SkillCard
            skill={"Enterprise Software Architecture & Design Experience"}
          />
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
  width: 30rem;

  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;

  background-color: ${globalColors.PrimaryWhite};

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    max-width: none;
    width: 80vw;
  }
`;

const InnerSkillsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
`;

const MySecondaryText = styled(SecondaryText)`
  margin: 0;
  padding: 0.3rem;
  font-weight: 800 !important;
  /* margin-bottom: 0.5rem; */
`;

export default Skills;
