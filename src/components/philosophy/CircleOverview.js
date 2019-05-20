import React from "react";
import styled from "styled-components";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";
import beakrLogo from "../../images/beakr_logo.svg";
import AGLogo from "../../images/AG LOGO Vector-COM.jpg";

const Overview = props => {
  const calcItemRotation = position => {
    var angle = (360 / 6) * position;
    var rot = 0;
    rot = rot + angle - 90;
    return rot;
  };

  return (
    <CircleContainer>
      <SmallCircleContainer rot={calcItemRotation(0)}>
        <SmallCircleItem>
          <Number>Step 1:</Number>
          <CircleText>Ideas</CircleText>
        </SmallCircleItem>
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
        <SmallCircleItem>
          <Number>Step 2:</Number>
          <CircleText>Build</CircleText>
        </SmallCircleItem>
        <BigCircleItem>
          <InnerText>Typical turnaround time for a new software rev is 1-2 weeks.</InnerText>
        </BigCircleItem>
      </SmallCircleContainer>
      <SmallCircleContainer rot={calcItemRotation(2)}>
        <SmallCircleItem>
          <Number>Step 3:</Number>
          <CircleText>Product</CircleText>
        </SmallCircleItem>
        <BigCircleItem>
          <InnerText>Check out our previous projects:</InnerText>
          <ExperienceContainer>
            <Logo src={beakrLogo} alt="BeakrLogo" />
            <Logo src={AGLogo} alt="AGLogo" />
          </ExperienceContainer>
        </BigCircleItem>
      </SmallCircleContainer>
      <SmallCircleContainer rot={calcItemRotation(3)}>
        <SmallCircleItem>
          <Number>Step 4:</Number>
          <CircleText>Measure</CircleText>
        </SmallCircleItem>
        <BigCircleItem>
          <InnerText>
            We utilize modern sales and marketing practices to quickly test
            product in various channels to gain quick feedback.
          </InnerText>
          {/* <ExperienceContainer /> */}
        </BigCircleItem>
      </SmallCircleContainer>
      <SmallCircleContainer rot={calcItemRotation(4)}>
        <SmallCircleItem>
          <Number>Step 5:</Number>
          <CircleText>Data</CircleText>
        </SmallCircleItem>
        <BigCircleItem>
          <InnerText>
            By using entrepreneurial accounting, we are able to quickly analyze and present the data.
          </InnerText>
        </BigCircleItem>
      </SmallCircleContainer>
      <SmallCircleContainer rot={calcItemRotation(5)}>
        <SmallCircleItem>Learn</SmallCircleItem>
        <SmallCircleItem>
          <Number>Step 6:</Number>
          <CircleText>Innovate</CircleText>
        </SmallCircleItem>
        <BigCircleItem>
          <InnerText>
            Finally, decisions are made using data from our internal
            analytics engine, and we can start on the next rev.
          </InnerText>
        </BigCircleItem>
      </SmallCircleContainer>
      <CircleLabelContainer>
        <CircleLabel>Lean Development</CircleLabel>
      </CircleLabelContainer>
    </CircleContainer>
  );
};

const CircleContainer = styled.div`
  /* @include on-circle($item-count: 6, $circle-size: 20em, $item-size: 6em); */
  /* margin: 5em auto 0; */
  border: solid 10px ${globalColors.SecondaryOrange};
  position: relative;
  min-width: 30vw;
  min-height: 30vw;
  margin: 5rem;
  border-radius: 50%;
  list-style: none;

  @media only screen and (max-width: 1200px) {
    width: 40vw;
    height: 40vw;

    border: solid 5px ${globalColors.SecondaryOrange};
  }


  @media only screen and (max-width: 900px) {
    width: 60vw;
    height: 60vw;

    border: solid 5px ${globalColors.SecondaryOrange};
  }
`;

const CircleLabelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26vw;

  @media only screen and (max-width: 1200px) {
    height: 37vw;
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 900px) {
    height: 57vw;
    padding-bottom: 2rem;
  }
`;

const CircleLabel = styled.h2`
  /* display: relative;
  top: 50%;
  left: 50%; */
  width: 80%;
  text-align: center;
  color: ${globalColors.PrimaryBlue};
  font-size: 3rem;
  margin-bottom: 2rem;
  font-weight: 500 !important;

  /* @media only screen and (max-width: 1200px) {
    font-size: 1.8rem !important;
  } */

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1.8rem;
  }
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
    translate(calc(30vw / 2)) rotate(calc(${props => props.rot} * -1deg));

  /* :hover {
    transition: display 0.2s linear;
  } */

  @media only screen and (max-width: 1200px) {
    transform: rotate(calc(${props => props.rot} * 1deg))
      translate(calc(35vw / 2)) rotate(calc(${props => props.rot} * -1deg));
  }

  @media only screen and (max-width: 900px) {
    transform: rotate(calc(${props => props.rot} * 1deg))
      translate(calc(65vw / 2)) rotate(calc(${props => props.rot} * -1deg));
  }
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${SmallCircleContainer}:hover & {
    display: none;
    transition: opacity 0.5s linear;
  }

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    width: 7rem;
    height: 7rem;
    margin: calc(-7rem / 2);
  font-size: 1.5rem;
  
  }
`;

const Number = styled.h4`
  /* position: absolute;
  top: 0;
  left: 40%; */
  margin: 0;
  font-weight: 300 !important;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1rem;
  }
`;

const CircleText = styled.h2`
  margin: 0;
  padding: 0.2rem;
  font-weight: 800 !important;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 1rem;
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

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    width: 12rem;
    height: 12rem;
    margin: calc(-12rem / 2);
    font-size: 1.5rem;
  }

`;

const InnerText = styled.h4`
  padding-top: 0.3rem;
  font-size: 1.5rem;
  text-align: center;
  width: 80%;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    font-size: 0.8rem;
    padding-top: 0.3rem;
  }
`;

const ExperienceContainer = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Logo = styled.img`
  height: 4rem;
  width: 4rem;
  margin: 10px 16px 5px 16px;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    /* margin: 5px 8px 5px 8px; */
    margin: 2px;
  }
`;

export default Overview;
