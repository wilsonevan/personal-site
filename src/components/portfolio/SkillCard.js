import React from "react";
import styled from "styled-components";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

const SkillCard = props => {
  return (
    <CardContainer>
      <CardText>{props.skill}</CardText>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  margin: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px 3px rgba(100, 100, 100, 0.1);
  padding: 0.5rem 1rem 0.5rem 1rem;
  opacity: 0.8;
  background-color: ${globalColors.PrimaryGreen};
`;

const CardText = styled.h3`
  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

export default SkillCard;
