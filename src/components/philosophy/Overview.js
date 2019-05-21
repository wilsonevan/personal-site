import React from "react";
import styled from "styled-components";
import { PrimaryText } from "../../styles/GlobalComponents";
import { Link } from "react-router-dom";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";
import BGImage from "../../images/architecture-black-and-white-buildings-1437493.jpg";
// import Image2 from "../../images/architecture-black-and-white-buildings-1437493.jpg";
// import Image3 from "../../images/adult-architecture-buildings-380283.jpg";

class Overview extends React.Component {
  render() {
    return (
      <>
        <PageContainer>
          <Background
            src={BGImage}
            alt="LinesBGImage"
            onLoad={() => this.props.updateLoader(3)}
          />
          <InnerTextContainer>
            <MyPrimaryText>What I do</MyPrimaryText>
            <Link to="/development">
              <Header>Rapid Prototype Development</Header>
            </Link>
            <Link to="/user-experience">
              <Header>User Experience Design & Analysis</Header>
            </Link>
            <Link to="/support">
              <Header>Technical Product Support</Header>
            </Link>
          </InnerTextContainer>
        </PageContainer>
      </>
    );
  }
}

const Background = styled.img`
  position: relative;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  opacity: 0.4;
  z-index: -10;
`;

const PageContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-bottom: ${globalColors.SecondaryOrange};
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;


const InnerTextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const MyPrimaryText = styled(PrimaryText)`
  margin-bottom: 2rem;
  text-align: center;
  z-index: 10;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    margin-bottom: 1rem;
  }
`;

const Header = styled.h2`
  text-align: center;
  font-size: 4rem !important;
  font-weight: 700 !important;
  color: ${globalColors.PrimaryGrey};
  margin: 0;
  padding-bottom: 1rem;

  :hover {
    color: ${globalColors.PrimaryRed};
    transition: 0.2s ease-in-out;
    cursor: pointer;
  }

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1.5rem !important;
    font-weight: 700 !important;
  }
`;

export default Overview;
