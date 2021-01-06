import React from "react";
import styled, { css } from "styled-components";

const ButtonComponet = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponet;

const Button = styled.button`
  padding: 5px;
  outline: none;
  border: none;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: #f0e2d0;
    `}
`;
