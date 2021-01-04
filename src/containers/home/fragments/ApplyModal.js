import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import cookingClass from "../../../images/cookingClass.jpg";

const ApplyModal = () => {
  const [showModal, setShowModal] = useState(false);
  let history = useHistory();

  const handleClick = (e) => {
    if (e.target.id === "bg") {
      setShowModal(false);
    }
  };

  return (
    <Background showModal={showModal} id="bg" onClick={handleClick}>
      <ModalContainer showModal={showModal}>
        <TouchLineArea onClick={() => setShowModal(!showModal)}>
          <TouchLine></TouchLine>
        </TouchLineArea>
        <ModalHeadTitle>직접 요리해보고 싶나요?</ModalHeadTitle>
        <ModalHeadBtn onClick={() => history.push("/lecture")}>
          요리 수업 신청하러 가기 <AiOutlineCheck />
        </ModalHeadBtn>
        <ModalPicture></ModalPicture>
        <ModalHeadText>
          5명 이하의 소규모 요리 수업으로, 강아지와 함께 동행하실 수 있습니다.
        </ModalHeadText>
        <ModalHeadText>
          수업 후에는 소소한 파티가 진행 될 예정입니다.
        </ModalHeadText>
      </ModalContainer>
    </Background>
  );
};

export default ApplyModal;

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  ${(props) =>
    props.showModal &&
    css`
      visibility: visible;
    `}
  transition: all 0.2s ease;
`;

const ModalContainer = styled.div`
  z-index: 1000;
  position: absolute;
  bottom: -75%;
  width: 100%;
  height: 100%;
  max-width: 600px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  visibility: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  ${(props) =>
    props.showModal &&
    css`
      top: 10%;
    `}
`;

const TouchLineArea = styled.div`
  width: 100%;
  cursor: pointer;
`;

const TouchLine = styled.div`
  width: 70px;
  height: 6px;
  margin: 18px auto 35px;
  background-color: rgb(217, 217, 217);
  border-radius: 20px;
`;

const ModalHeadTitle = styled.p`
  margin-bottom: 15px;
  font-size: 1.8rem;
  font-weight: bold;
`;

const ModalHeadBtn = styled.button`
  outline: none;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  background-color: #f0e2d0;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ModalPicture = styled.div`
  margin: 30px 0;
  background-image: url(${cookingClass});
  background-size: cover;
  width: 400px;
  height: 400px;
  border-radius: 50%;
`;

const ModalHeadText = styled.span`
  padding: 10px 70px;
  font-size: 1.2rem;
`;
