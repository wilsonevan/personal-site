import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToComponent } from "react-scroll-to-component";
import { Transition } from "react-transition-group";
import {
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";
import beakrLogo from "../../images/beakr_logo.svg";
import AGLogo from "../../images/AG LOGO Vector-COM.jpg";
import BGImage from "../../images/kvistholt-photography-191153-unsplash-blurred.jpg"

const Overview = props => {
  const calcItemRotation = position => {
    var angle = (360 / 6) * position;
    var rot = 0;
    rot = rot + angle - 90;
    return rot;
  };

  return (
    <PageContainer>
      <MyPrimaryText>Our Philosophy</MyPrimaryText>
      <CircleContainer>
        <SmallCircleContainer rot={calcItemRotation(0)}>
          <SmallCircleItem>Ideas</SmallCircleItem>
          <BigCircleItem>
            <InnerText>Your ideas, our resources.</InnerText>
            {/* <InnerButton
              onClick={() =>
                scrollToComponent(props.refs[1], {
                  offset: 0,
                  align: "top",
                  ease: "inOutCube",
                  duration: 1500
                })
              }
            >
              Contact Us
            </InnerButton> */}
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(1)}>
          <SmallCircleItem>Build</SmallCircleItem>
          <BigCircleItem>
            <InnerText>Experience in:</InnerText>
            <ExperienceContainer>
              <ExperienceItem>HTML/CSS</ExperienceItem>
              <ExperienceItem>Reactjs</ExperienceItem>
              <ExperienceItem>Ruby on Rails</ExperienceItem>
              <ExperienceItem>Python</ExperienceItem>
              <ExperienceItem>Raw SQL</ExperienceItem>
              <ExperienceItem>PostgreSQL</ExperienceItem>
              <ExperienceItem>Javascript</ExperienceItem>
              <ExperienceItem>XML</ExperienceItem>
              <ExperienceItem>C</ExperienceItem>
              <ExperienceItem>Matlab</ExperienceItem>
              <ExperienceItem>Assembly</ExperienceItem>
            </ExperienceContainer>
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(2)}>
          <SmallCircleItem>Product</SmallCircleItem>
          <BigCircleItem>
            <InnerText>Check out our previous projects:</InnerText>
            <ExperienceContainer>
              <Logo src={beakrLogo} alt="BeakrLogo" />
              <Logo src={AGLogo} alt="AGLogo" />
            </ExperienceContainer>
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(3)}>
          <SmallCircleItem>Measure</SmallCircleItem>
          <BigCircleItem>
            <InnerText>
              We utilize modern sales and marketing practices to quickly test
              product in various channels to gain quick feedback
            </InnerText>
            <ExperienceContainer />
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(4)}>
          <SmallCircleItem>Data</SmallCircleItem>
          <BigCircleItem>
            <InnerText>
              By gathering sales and marketing data and utlizing entrepreneurial
              accounting, we are able to quickly make changes and decisions.
            </InnerText>
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(5)}>
          <SmallCircleItem>Learn</SmallCircleItem>
          <BigCircleItem>
            <InnerText>
              Finally, decisions can be made based on data from our internal
              analytics engine, and forward progress is made.
            </InnerText>
          </BigCircleItem>
        </SmallCircleContainer>
        <CircleLabelContainer>
          <CircleLabel>Lean Development</CircleLabel>
        </CircleLabelContainer>
      </CircleContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  border-bottom: ${globalColors.SecondaryOrange};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  padding-top: 3rem;
  padding-bottom: 8rem;
  background-image: url(${BGImage}) !important;
  /* filter: blur(8px);
  -webkit-filter: blur(8px); */

  /* Full height */
  /* height: 100%;  */

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: ${globalColors.SecondaryGrey}; */
`;

const MyPrimaryText = styled(PrimaryText)`
  margin-bottom: 5rem;
`;

const CircleContainer = styled.div`
  /* @include on-circle($item-count: 6, $circle-size: 20em, $item-size: 6em); */
  /* margin: 5em auto 0; */
  border: solid 10px ${globalColors.SecondaryOrange};
  position: relative;
  min-width: 35vw;
  min-height: 35vw;
  padding: 0;
  border-radius: 50%;
  list-style: none;
`;

const CircleLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CircleLabel = styled.h2`
  /* top: 50%; */
  /* left: 50%; */
  width: 80%;
  text-align: center;
  color: ${globalColors.PrimaryBlue};
  font-size: 3rem;
  padding-bottom: 2rem;
`;

const SmallCircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 6rem;
  min-height: 6rem;
  margin: calc(-6rem / 2);

  transform: rotate(calc(${props => props.rot} * 1deg))
    translate(calc(33vw / 2)) rotate(calc(${props => props.rot} * -1deg));

  /* :hover {
    transition: display 0.2s linear;
  } */
`;

// const Circle = styled.div``
const SmallCircleItem = styled.div`
  width: 10rem;
  height: 10rem;
  margin: calc(-10rem / 2);
  border-radius: 50%;
  background-color: ${globalColors.SecondaryBlue};
  /* border: 1px solid ${globalColors.PrimaryBlue}; */

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;

  ${SmallCircleContainer}:hover & {
    display: none;
    transition: opacity 0.5s linear;
  }
`;

const BigCircleItem = styled(SmallCircleItem)`
  display: none;
  width: 20rem;
  height: 20rem;
  margin: calc(-20rem / 2);
  background-color: ${globalColors.SecondaryBlue};
  /* border: 10px solid ${globalColors.PrimaryGrey}; */
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  padding: 1rem;

  ${SmallCircleContainer}:hover & {
    display: flex;
    transition: opacity 0.5s linear;
  }
`;

const InnerText = styled.h4`
  font-size: 1.5rem;
  text-align: center;
`;

const InnerButton = styled.button`
  margin: 0.5rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  background-color: ${globalColors.PrimaryOrange};
  box-shadow: 0 3px 3px 3px rgba(100, 100, 100, 0.1);
  border-radius: 0.5rem;
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

const ExperienceContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ExperienceItem = styled.div`
  margin: 0.2rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 3px 3px rgba(100, 100, 100, 0.1);
  padding: 0.5rem 1rem 0.5rem 1rem;
  opacity: 0.8;
  background-color: ${globalColors.PrimaryGreen};
  max-height: 2rem;
  font-size: 1rem;
`;

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 10px 16px 5px 16px;
`;

export default Overview;
