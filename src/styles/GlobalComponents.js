import styled from "styled-components";
import { globalColors } from "./GlobalStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TopContainer = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-position: center;
  background-size: cover;
  background-attachment: fixed; */
  /* border-bottom: #a9d3f8; */
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

export const SecondContainer = styled.section`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  /* align-items: left; */
  min-height: 80vh;
  width: 100%;
  background-color: ${globalColors.PrimaryWhite};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: ${globalColors.SecondaryBlue};
  border-bottom-width: 3px;
  border-bottom-style: solid;
  border-top: ${globalColors.SecondaryOrange};
  border-top-width: 3px;
  border-top-style: solid;
`;

export const PrimaryText = styled.h1`
  padding-bottom: 0.5rem;
  /* border-bottom: 1px solid #349dc4; */
`;

export const SecondaryText = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  line-height: 2.5rem;
  /* color: ${globalColors.PrimaryOrange}; */
`;
