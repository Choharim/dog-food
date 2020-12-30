import React from "react";
import styled from "styled-components";
import { FaDog } from "react-icons/fa";

const LogIn = () => {
  return (
    <LogInContainer>
      <LogInIcon />
    </LogInContainer>
  );
};

export default LogIn;

const LogInContainer = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogInIcon = styled(FaDog)`
  font-size: 3.5rem;
`;
