import React, { useState } from "react";
import styled from "styled-components";

const ApplyModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {!showModal ? (
        <ModalHead>
          <TouchLine></TouchLine>
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
  width: 100%;
  height: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border: 1px solid black;
`;

const TouchLine = styled.div`
  width: 70px;
  height: 6px;
  background-color: rgb(217, 217, 217);
  margin: 15px auto 35px;
  border-radius: 20px;
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
