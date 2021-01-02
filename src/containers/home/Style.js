import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BarIcon = styled(FaBars)`
  position: fixed;
  right: 0;
  font-size: 1.5rem;
  padding: 10px;
  z-index: 1000;
  ${(props) =>
    props.showNavbar === true &&
    css`
      color: white;
    `};
`;

export const Navbar = styled.div`
  width: 330px;
  height: 100vh;
  background-color: black;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const LogOut = styled.button`
  outline: none;
  border: none;
  font-size: 1.4rem;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

export const LogIn = styled(Link)`
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
`;

export const MenuFilterContainer = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

export const MenuFilterItem = styled.button`
  outline: none;
  background-color: transparent;
  width: 110px;
  height: 110px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${(props) =>
    props.color &&
    css`
      background-color: #f0e2d0;
    `}
`;

export const MenuFilterIcon = styled.img`
  width: 80px;
  height: 75px;
`;

export const MenuFilterText = styled.span`
  font-size: 1.2rem;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin-top: 60px;
`;

export const MenuItemContainer = styled.div`
  width: 300px;
  height: 400px;
  margin: 0 15px;
`;

export const HeartIcon = styled(AiOutlineHeart)`
  position: relative;
  left: 85%;
  font-size: 2rem;
`;
