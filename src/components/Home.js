import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import {
  PageContainer,
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../styles/GlobalComponents";

const Home = () => {
  return (
    <>
      <PageContainer>
        <Navbar />
        <TopContainer>
          <DescriptionContainer>
            <PrimaryText>Cortona Creative</PrimaryText>
            <MySecondaryText>
              Working to inspire lifelong learning, advance knowledge, and
              strengthen our community by providing easier access to education
              through modern technology.
            </MySecondaryText>
          </DescriptionContainer>
        </TopContainer>
        {/* <LeftTextContainer>
          <PrimaryText>Audio Grenade</PrimaryText>
          <SecondaryText>
            A unique, useful gift for your best clients and employees
          </SecondaryText>
        </LeftTextContainer> */}
      </PageContainer>
    </>
  );
};

// const LeftTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   color: white;
//   margin-left: 18vw;
//   margin-top: 45vh;
// `;


const Logo = styled.img`
  width: auto;
  height: 70%;
`;

const MySecondaryText = styled(SecondaryText)`
  text-align: left;
  width: 60%;
`;

const DescriptionContainer = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
`;

export default Home;
