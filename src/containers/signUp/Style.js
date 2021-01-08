import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const SignUpContainer = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SignUpForm = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserPicture = styled.input`
  display: none;
`;

export const UserPictureLabel = styled.label`
  width: 150px;
  height: 150px;
  background-color: powderblue;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  cursor: pointer;
`;

export const PreviewPicture = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  align-self: center;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

export const PicturePlusIcon = styled(AiOutlinePlusCircle)`
  font-size: 1.5rem;
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

export const NameLabel = styled.label`
  font-size: 1.2rem;
`;

export const NameInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const AddressLabel = styled.label`
  font-size: 1.2rem;
`;

export const AddressBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
`;

export const DaumPostContainer = styled.div`
  border: 1px solid;
  margin: 3px;
  position: relative;
  top: -5px;
`;

export const ZoneCodeInput = styled.input`
  width: 50%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const ZoneCodeDelBtn = styled(TiDelete)`
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  right: -5px;
  top: -5px;
  z-index: 1;
`;

export const AddressInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const ExtraAddressInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const PhoneLabel = styled.label`
  font-size: 1.2rem;
`;

export const PhoneInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  margin-bottom: 10px;
`;

export const SignUpBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
  align-self: flex-end;
`;

export const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListTitle = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const ListContent = styled.li`
  font-weight: lighter;
  padding-bottom: 10px;
`;

export const BackBtn = styled.button`
  width: 90px;
  height: 30px;
  outline: none;
  border-radius: 5px;
  padding: 5px 0;
`;

export const LogInBtn = styled(Link)`
  width: 40%;
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
  &:visited {
    color: black;
  }
`;

export const LogInIcon = styled(AiOutlineArrowRight)`
  font-size: 1.5rem;
  padding-left: 5px;
`;
