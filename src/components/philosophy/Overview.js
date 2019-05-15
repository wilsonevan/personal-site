import React from "react";
import styled from "styled-components";
import {
  PrimaryText,
} from "../../styles/GlobalComponents";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";
import BGImage from "../../images/philosophy-section-background.png";
import CircleOverview from "./CircleOverview";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";

const Overview = props => {
  return (
    <>
      <Background src={BGImage} alt="LinesBGImage" />
      <PageContainer>
        <MyPrimaryText>What I do</MyPrimaryText>
        <DisplayContainer>
          <CircleOverview />
          <Skills />
          <SoftSkills />
        </DisplayContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  border-bottom: ${globalColors.SecondaryOrange};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  padding-top: 3rem;
  padding-bottom: 8rem;

  /* background-image: url(${BGImage}); */
  /* opacity: 0.5; */
/*   
  filter: blur(8px);
  -webkit-filter: blur(8px); */

  /* Full height */
  /* height: 100%;  */

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: ${globalColors.SecondaryGrey}; */

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    padding-bottom: 2rem;
  }
`;

const Background = styled.img`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  opacity: 0.1;
  z-index: -1;
`;

const MyPrimaryText = styled(PrimaryText)`
  margin-bottom: 3rem;
  text-align: center;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    margin-bottom: 1rem;
  }
`;

const DisplayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default Overview;
