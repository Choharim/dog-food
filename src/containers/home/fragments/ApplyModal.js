import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const ApplyModal = () => {
  const [showModal, setShowModal] = useState(false);
  let history = useHistory();

  return (
    <>
      {!showModal ? (
        <ModalHead>
          <TouchLine></TouchLine>
          <ModalHeadTitle>직접 요리해보고 싶나요?</ModalHeadTitle>
          <ModalHeadText onClick={() => history.push("/lecture")}>
            요리 수업 신청하러 가기 <AiOutlineCheck />
          </ModalHeadText>
        </ModalHead>
      ) : (
        <Background>
          <ModalContainer></ModalContainer>
        </Background>
      )}
    </>
  );
};

export default ApplyModal;

const ModalHead = styled.div`
  position: relative;
  bottom: -30px;
  width: 100%;
  height: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TouchLine = styled.div`
  width: 70px;
  height: 6px;
  margin: 15px auto 35px;
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

const Background = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
`;

const ModalContainer = styled.div`
  z-index: 500;
  position: absolute;
  bottom: 0px;
  width: 100%;
  max-width: 600px;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  height: calc(100% - 70px);
`;
