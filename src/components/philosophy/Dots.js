import React from "react";
import styled from 'styled-components';
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

const Dots = props => {
  
  const renderDots = () => {
    const {numDots} = props
    var dotsComponents = []

    for (var i = 1; i <= numDots; i++ ){
      if (i <= props.rating)
      dotsComponents.push(
        <Dot background={globalColors.PrimaryBlue} />
      )
      else 
      dotsComponents.push(
        <Dot />
      )
    }
    return dotsComponents
  }

  return (
  <>
    {renderDots()}
  </>
  )
};

const Dot = styled.div`
  height: 30px;
  width: 30px;
  border: 2px solid white;
  border-radius: 15px;
  background: ${props => props.background || "white" };
  margin: 0.1rem;
`

export default Dots;
