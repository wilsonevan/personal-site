import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import image1 from '../images/barca_4_cropped.jpg'
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
          <CircleImage src={image1} alt="CCLogo" />
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


const CircleImage = styled.img`
  width: 40vw;
  min-width: 20rem;
  height: auto;
  /* height: 70vh; */
  border-radius: 50%;
  border: 5px solid #A9D3F8;
  margin-bottom: 10rem;
`;

const MySecondaryText = styled(SecondaryText)`
  text-align: left;
  width: 50%;
`;

const DescriptionContainer = styled.div`
  padding-left: 3rem;
  padding-right: 3rem;
  position: absolute;
  bottom: 0rem;
  width: 100%;
  margin-bottom: 1rem;
`;

export default Home;
