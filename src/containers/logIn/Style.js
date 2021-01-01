import styled from "styled-components";
import { FaDog } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export const LogInContainer = styled.div`
  width: 100%;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInIcon = styled(FaDog)`
  font-size: 3.5rem;
`;

export const LogInForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IDLabel = styled.label`
  font-size: 1.2rem;
`;

export const IDInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const PWLabel = styled.label`
  font-size: 1.2rem;
`;

export const PWInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const PWError = styled.p`
  width: 100%;
  margin: 0;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
`;

export const SubmitBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  align-self: flex-end;
`;

export const SignUpBtn = styled(Link)`
  width: 40%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  color: black;
  &:visited {
    color: black;
  }
`;

export const SignUpIcon = styled(AiOutlineArrowRight)`
  font-size: 1.5rem;
  padding-left: 5px;
`;
