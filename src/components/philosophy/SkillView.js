import React from "react";
import styled from "styled-components";
import Dots from "./Dots";
import { globalSizes } from "../../styles/GlobalStyles";


const SkillView = props => {
  return (
    <>
      <SkillContainer>
        <SkillName>{props.name}</SkillName>
        <DotsContainer>
          <Dots numDots={5} rating={props.rating} />
        </DotsContainer>
      </SkillContainer>
    </>
  );
};

const SkillContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
`;

const SkillName = styled.h3`
  width: 10rem;
  font-weight: 500 !important;
  margin: 0;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0.1rem;
  /* position: absolute; */
  /* z-index: 1; */
  /* bottom: 0; */
`;

export default SkillView;
