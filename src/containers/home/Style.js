import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const BarContainer = styled.div`
  width: 100%;
`;

export const BarIcon = styled(FaBars)`
  position: sticky;
  top: 0;
  left: 0;
  font-size: 1.5rem;
  padding: 10px;
`;

export const Navbar = styled.div`
  width: 550px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogOut = styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  background-color: transparent;
  color: white;
`;

export const LogIn = styled(Link)`
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
`;
