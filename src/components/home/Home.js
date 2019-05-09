import React, { useRef } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import image1 from "../../images/barca_4_cropped.jpg";
import {
  PageContainer,
  PrimaryText,
  SecondaryText,
  TopContainer
} from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";
import Profile from "./Profile";
import scrollToComponent from "react-scroll-to-component";

class Home extends React.Component {
  render() {
    return (
      <>
        <PageContainer>
          <Navbar refs={[this.About, this.Top]} />
          {/* <MyButton
            onClick={() =>
              scrollToComponent(this.About, {
                offset: 0,
                align: "top",
                duration: 1500
              })
            }
          /> */}
          <section ref={section => {
              this.Top = section;
            }}>
            <TopContainer>
              <CircleImage src={image1} alt="CCLogo" />
              <DescriptionContainer>
                <PrimaryText>Cortona Creative</PrimaryText>
                <MySecondaryText>
                  Strengthening our community by enhancing opportunities for
                  lifelong learning.
                </MySecondaryText>
              </DescriptionContainer>
            </TopContainer>
          </section>
          <section
            ref={section => {
              this.About = section;
            }}
          >
            <Profile />
          </section>
        </PageContainer>
      </>
    );
  }
}

// const LeftTextContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   color: white;
//   margin-left: 18vw;
//   margin-top: 45vh;
// `;

const MyButton = styled.button`
  position: absolute;
  top: 100px;
  width: 200px;
  height: 100px;

  :hover {
    background-color: red;
    cursor: pointer;
  }
`;

const CircleImage = styled.img`
  width: 40vw;
  min-width: 20rem;
  height: auto;
  /* height: 70vh; */
  border-radius: 50%;
  border: 5px solid #a9d3f8;
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
