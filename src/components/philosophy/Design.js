import React from "react";
import styled from "styled-components";
import chartsImage from "../../images/trends.png";
import gradesImage from "../../images/grades.png";
import attendanceImage from "../../images/attendance.png";
import agNew1 from "../../images/ag-new.png";
import agNew2 from "../../images/ag-new2.png";
import agNew3 from "../../images/ag-new3.png";
import agOld from "../../images/ag-old.png";
import { globalColors, globalSizes } from "../../styles/GlobalStyles";

const Design = () => {
  return (
    <>
      <PageContainer>
        <DesignHeader>UX Design & Analysis</DesignHeader>
        <SectionContainer>
          <InnerContainer alignment={"flex-end"}>
            <RightTextContainer>
              <PrimaryText>Custom Charts and Analytics</PrimaryText>
            </RightTextContainer>
            <ImageContainer>
              <SectionImage src={gradesImage} alt="charts-image" />
            </ImageContainer>
          </InnerContainer>
          <InnerContainer alignment={"flex-start"}>
            <ImageContainer>
              <SectionImage src={chartsImage} alt="charts-image" />
            </ImageContainer>
            <ImageContainer>
              <SectionImage src={attendanceImage} alt="charts-image" />
            </ImageContainer>
          </InnerContainer>
        </SectionContainer>
        <SectionContainer>
          {/* <InnerContainer> */}
          <RightTextContainer>
            <PrimaryText border={"none"}>UI/UX Makeovers</PrimaryText>
          </RightTextContainer>
          <ComparisonContainer>
            <OneSideContainer>
              <SecondaryText>OLD</SecondaryText>
              <SectionImage src={agOld} alt="code-screenshot" />
            </OneSideContainer>
            <VSContainer>
              <SecondaryText border={"none"}>vs</SecondaryText>
            </VSContainer>
            <OneSideContainer>
              <SecondaryText>NEW</SecondaryText>
              <ColumnImageContainer>
                <BorderlessImage src={agNew1} alt="code-screenshot" />
                <BorderlessImage src={agNew2} alt="code-screenshot" />
                <BorderlessImage src={agNew3} alt="code-screenshot" />
              </ColumnImageContainer>
            </OneSideContainer>
          </ComparisonContainer>
          {/* </InnerContainer> */}
        </SectionContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: ${globalColors.PrimaryWhite}; */
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  width: 100vw;
  border-bottom: ${globalColors.SecondaryOrange};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: ${props => props.alignment || "center"};
  width: 100%;
`;

const DesignHeader = styled.h1`
  padding-top: 3rem;
  padding-bottom: 1rem;
`;

const ImageContainer = styled.div`
  /* width: 50vw;
  height: auto; */
  margin: 0.5rem;
`;

const ComparisonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const OneSideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;
`;

const ColumnImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: no-wrap;

  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;
`;

const SectionImage = styled.img`
  width: 40vw;
  height: auto;
  border-top: 1px solid ${globalColors.SecondaryBlue};
  border-left: 1px solid ${globalColors.SecondaryBlue};
  border-right: 3px solid ${globalColors.SecondaryBlue};
  border-bottom: 5px solid ${globalColors.SecondaryBlue};
  border-radius: 0.5rem;

  @media (max-width: 600px) {
    width: 50vh;
  }
`;

const BorderlessImage = styled.img`
  width: 40vw;
  height: auto;

  @media (max-width: 600px) {
    width: 50vh;
  }
`;

const RightTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  margin: 0.5rem;
`;

const VSContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem;
`;

const PrimaryText = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-weight: 600 !important;
  color: ${globalColors.PrimaryBlue};
  border-bottom: 1px solid ${globalColors.SecondaryRed};
  border-right: 1px solid ${globalColors.SecondaryRed};
  border-bottom: ${props => props.border || "" };
  border-right: ${props => props.border|| "" };
`;

const SecondaryText = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: 400 !important;
  color: ${globalColors.PrimaryBlue};
  border-bottom: 1px solid ${globalColors.PrimaryRed};
  border-top: 1px solid ${globalColors.PrimaryRed};
  border-bottom: ${props => props.border || "" };
  border-top: ${props => props.border || "" };
`;

export default Design;
