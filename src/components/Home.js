import React from "react";
import styled from "styled-components";
import {
  PageContainer,
  PrimaryText,
  SecondaryText
} from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <MyContainer>
        {/* <LeftTextContainer>
          <PrimaryText>Audio Grenade</PrimaryText>
          <SecondaryText>
            A unique, useful gift for your best clients and employees
          </SecondaryText>
        </LeftTextContainer> */}
        <PrimaryText>Test</PrimaryText>
      </MyContainer>
    </>
  );
};

const MyContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
  background-color: ${props => props.theme.primaryBlue};
`;

const MyText = styled.h1``;

// const LeftTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   color: white;
//   margin-left: 18vw;
//   margin-top: 45vh;
// `;

export default Home;
