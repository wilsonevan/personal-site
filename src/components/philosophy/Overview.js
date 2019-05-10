import React from "react";
import styled from "styled-components";

const Overview = () => {
  const calcItemRotation = position => {
    var angle = (360 / 6) * position;
    var rot = 0;
    rot = rot + angle - 90;
    return rot;
  };

  return (
    <PageContainer>
      <CircleContainer>
        <SmallCircleItem rot={calcItemRotation(0)}>Test</SmallCircleItem>
        <BigCircleItem rot={calcItemRotation(0)}>Test</BigCircleItem>
        <SmallCircleItem rot={calcItemRotation(1)}>Test</SmallCircleItem>
        <SmallCircleItem rot={calcItemRotation(2)}>Test</SmallCircleItem>
        <SmallCircleItem rot={calcItemRotation(3)}>Test</SmallCircleItem>
        <SmallCircleItem rot={calcItemRotation(4)}>Test</SmallCircleItem>
        <SmallCircleItem rot={calcItemRotation(5)}>Test</SmallCircleItem>
      </CircleContainer>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CircleContainer = styled.div`
  /* @include on-circle($item-count: 6, $circle-size: 20em, $item-size: 6em); */
  /* margin: 5em auto 0; */
  border: solid 5px tomato;
  position: relative;
  width: 30vw;
  height: 30vw;  
  padding: 0;
  border-radius: 50%;
  list-style: none;
`;
// const Circle = styled.div``
const SmallCircleItem = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6rem;
  height: 6rem;
  margin: calc(-6rem / 2);
  border-radius: 50%;

  transform: rotate(calc(${props => props.rot} * 1deg)) translate(calc(20rem / 2))
    rotate(calc(${props => props.rot} * -1deg));

  :hover {
    display: none;
  }
`;

const BigCircleItem = styled(SmallCircleItem)`
  display: none;

  

  `

export default Overview;
