import styled from "styled-components";
import { globalColors, globalSizes } from "./GlobalStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* width: 100% !important; */

`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 80vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: ${globalColors.SecondaryBlue};
  border-bottom-width: 3px;
  border-bottom-style: solid;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    };

`;

export const PrimaryText = styled.h1`
  padding-bottom: 0.5rem;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
        font-size: 3rem !important;
    };
`;

export const SecondaryText = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;

  @media only screen and (max-width: ${globalSizes.ScreenWidth}) {
        font-size: 1.5rem !important;
    };
`;
