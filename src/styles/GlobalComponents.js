import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: flex-start;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  border-bottom: #a9d3f8;
  border-bottom-width: 3px;
  border-bottom-style: solid;
`;

export const PrimaryText = styled.h1`
  color: #a9d3f8;
  padding-bottom: 0.5rem;
  /* border-bottom: 1px solid #349dc4; */
`;

export const SecondaryText = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;
