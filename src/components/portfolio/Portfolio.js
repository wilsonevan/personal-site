import React from "react";
import styled from "styled-components";
import { SecondContainer } from "../../styles/GlobalComponents";
import { globalColors } from "../../styles/GlobalStyles";
// import Iframe from "react-iframe";
import ProjectView from "./ProjectView";
import beakrLogo from "../../images/beakr_logo.svg";
import AGLogo from "../../images/AG LOGO Vector-COM.jpg";
import BGImage from "../../images/philosophy-section-background.png";

class Portfolio extends React.Component {
  render() {
    return (
      <>
        <Background src={BGImage} alt="LinesBGImage" onLoad={() => this.props.updateLoader(3)} />
        <ProjectsContainer>
          <PortfolioHeader>Portfolio</PortfolioHeader>
          <EachProject>
            <ProjectView
              title={"Beakr LMS for Coding Bootcamps"}
              github={"https://github.com/devpointlabs/beakr"}
              url={"https://beakr-dpl.herokuapp.com/"}
              instructions={[
                "1. Remember you may need to wait 15s for the server to boot up.",
                '2. For Teacher Views, use test@test.com with password: "password"',
                '3. For Student Views, evanstudent@test.com with password: "password"'
              ]}
              logo={beakrLogo}
              skills={[
                "Reactjs",
                "Ruby on Rails",
                "Raw SQL",
                "PostgreSQL",
                "HTML/CSS",
                "Twilio",
                "Cloudinary",
                "Chartjs",
                "Devise",
                "React Hooks"
              ]}
            />
            <ProjectView
              title={"Audio-Grenade Website & Store"}
              github={"https://github.com/wilsonevan/audio_grenade3"}
              url={"https://dev-audio-grenade.netlify.com/"}
              logo={AGLogo}
              skills={[
                "Reactjs",
                "HTML/CSS",
                "BigCommerce",
                "Freshworks",
                "React Hooks"
              ]}
            />
          </EachProject>
        </ProjectsContainer>
      </>
    );
  }
}

const Background = styled.img`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  opacity: 0.1;
  z-index: -1;
  background-color: white;
`;

const ProjectsContainer = styled(SecondContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 60vh;
  padding-bottom: 3rem;
`;

const PortfolioHeader = styled.h1`
  padding-top: 3rem;
  padding-bottom: 1rem;
  /* color: ${globalColors.PrimaryOrange}; */
  /* text-decoration: underline; */
`;

const EachProject = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  /* height: 20rem; */
  /* width: 20rem; */
  /* padding: 1rem; */
`;

export default Portfolio;
