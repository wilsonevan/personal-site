import React from "react";
import styled from "styled-components";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

import Networking from "./Networking";
import ProjectInquiry from "./ProjectInquiry";
import BGImage from "../../images/philosophy-section-background.png";

class ContactView extends React.Component {
  render() {
    return (
      <>
        <Background src={BGImage} alt="LinesBGImage" />
        <PageContainer>
          <Networking updateLoader={this.props.updateLoader} />
          <DividerContainer>
            <DividerLeft />
          </DividerContainer>
          <ProjectInquiry />
        </PageContainer>
      </>
    );
  }
}

const Background = styled.img`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  opacity: 0.1;
  /* z-index: -1; */
`;

const PageContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 3rem;
  padding-bottom: 8rem;
  /* background-color: ${globalColors.PrimaryWhite}; */

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    /* display: none; */
    flex-wrap: wrap;
  }
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 10%;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    /* display: none; */
    height: 5%;
    width: 100%;
  }
`;

const DividerLeft = styled.div`
  border-right: 2px solid ${globalColors.SecondaryOrange};
  margin: 3rem;
  height: 100%;
  width: 5%;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    border-right: none;
    border-bottom: 2px solid ${globalColors.SecondaryOrange};
    height: 5%;
    width: 100%;
  }
`;

export default ContactView;
