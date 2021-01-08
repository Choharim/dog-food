import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useHistory } from "react-router-dom";

const SuccessOrder = ({ setStep, orderInfo }) => {
  let history = useHistory();
  return (
    <>
      <BackBtn onClick={() => setStep((pre) => pre - 1)} />
      <Container>
        <SuccessTitle>{orderInfo.menu}</SuccessTitle>
        <SuccessTitle>주문이 완료되었습니다.</SuccessTitle>
        <Confirm onClick={() => history.push("/")}>확인</Confirm>
      </Container>
    </>
  );
};

export default SuccessOrder;

const BackBtn = styled(AiOutlineArrowLeft)`
  margin: 5px;
  padding: 10px;
  font-size: 2rem;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SuccessTitle = styled.span`
  font-size: 2rem;
  margin: 10px 0;
`;

const Confirm = styled.button`
  margin-top: 200px;
  width: 50%;
  font-size: 2rem;
`;
