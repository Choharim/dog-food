import React from "react";
import styled from "styled-components";
import ButtonComponet from "../../../components/Button";
import { useHistory } from "react-router-dom";

const SuccessModal = ({ lecture, setShowModal }) => {
  let history = useHistory();

  return (
    <ModalBg>
      <ModalContainer>
        <ModalPicture image={lecture.image} />
        <ModalTitle>{lecture.name}</ModalTitle>
        <ModalText>수업신청이 완료되었습니다.</ModalText>
        <BtnContainer>
          <CancleBtn
            onClick={() => {
              setShowModal(false);
              localStorage.removeItem("lecture");
            }}
          >
            취소
          </CancleBtn>
          <ConfirmBtn onClick={() => history.push("/")}>확인</ConfirmBtn>
        </BtnContainer>
      </ModalContainer>
    </ModalBg>
  );
};

export default SuccessModal;

const ModalBg = styled.div`
  width: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  width: 85%;
  height: 95%;
  background-color: white;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalPicture = styled.div`
  margin-top: 120px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: contain;
`;

const ModalTitle = styled.h1`
  margin-top: 90px;
`;

const ModalText = styled.span``;

const BtnContainer = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  justify-content: space-around;
`;

const CancleBtn = styled(ButtonComponet)`
  padding: 15px 10px;
  width: 40%;
`;

const ConfirmBtn = styled(ButtonComponet)`
  padding: 15px 10px;
  width: 40%;
`;
