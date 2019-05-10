import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";
import {
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";

const Overview = () => {
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
            <InnerText> Let's connect and see what we can do</InnerText>
            <InnerButton>Contact Us</InnerButton>
          </BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(1)}>
          <SmallCircleItem>Build</SmallCircleItem>
          <BigCircleItem>Test</BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(2)}>
          <SmallCircleItem>Product</SmallCircleItem>
          <BigCircleItem>Test</BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(3)}>
          <SmallCircleItem>Measure</SmallCircleItem>
          <BigCircleItem>Test</BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(4)}>
          <SmallCircleItem>Data</SmallCircleItem>
          <BigCircleItem>Test</BigCircleItem>
        </SmallCircleContainer>
        <SmallCircleContainer rot={calcItemRotation(5)}>
          <SmallCircleItem>Learn</SmallCircleItem>
          <BigCircleItem>Test</BigCircleItem>
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
`;

const MyPrimaryText = styled(PrimaryText)`
  margin-bottom: 5rem;
`;

const CircleContainer = styled.div`
  /* @include on-circle($item-count: 6, $circle-size: 20em, $item-size: 6em); */
  /* margin: 5em auto 0; */
  border: solid 10px ${globalColors.PrimaryBlue};
  position: relative;
  width: 35vw;
  height: 35vw;
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
  color: ${globalColors.PrimaryRed};
  font-size: 3rem;
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
    translate(calc(35vw / 2)) rotate(calc(${props => props.rot} * -1deg));

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
  background-color: ${globalColors.PrimaryBlue};
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
  width: 18rem;
  height: 18rem;
  margin: calc(-18rem / 2);
  background-color: ${globalColors.PrimaryBlue};
  /* border: 10px solid ${globalColors.PrimaryBlue}; */
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
`;

export default Overview;
