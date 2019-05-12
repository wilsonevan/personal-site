import React from "react";
import styled from "styled-components";
import { globalColors } from "../../styles/GlobalStyles";

import Networking from "./Networking";
import ProjectInquiry from "./ProjectInquiry";

const ContactView = () => {
  return (
    <PageContainer>
      <Networking />
      <DividerContainer>
        <DividerLeft />
        {/* <DividerRight /> */}
      </DividerContainer>
      <ProjectInquiry />
    </PageContainer>
  );
};

const PageContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 3rem;
  padding-bottom: 8rem;
`;

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 10%;
`;

const DividerLeft = styled.div`
  border-right: 2px solid ${globalColors.SecondaryOrange};
  margin: 3rem;
  height: 100%;
  width: 5%;
`;
const DividerRight = styled(DividerLeft)`
  border: none;
`;

export default ContactView;
