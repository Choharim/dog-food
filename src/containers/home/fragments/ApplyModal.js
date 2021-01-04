import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router-dom";

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
        <ModalHeadText onClick={() => history.push("/lecture")}>
          요리 수업 신청하러 가기 <AiOutlineCheck />
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
  transition: all 0.2s ease;
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

const ModalHeadText = styled.button`
  outline: none;
  border: none;
  padding: 12px 25px;
  border-radius: 30px;
  background-color: #f0e2d0;
  font-size: 1.2rem;
  cursor: pointer;
`;
