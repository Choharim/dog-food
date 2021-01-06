import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

const LectureDetails = ({ lecture, setLecture }) => {
  const [dataObj, setDataObj] = useState({
    data: "",
    time: "",
    items: [],
    service: "",
  });

  return (
    <DetailsContainer image={lecture.image2}>
      <BackBtn onClick={() => setLecture({})} />
      <DetailsTitle>{lecture.name}</DetailsTitle>
    </DetailsContainer>
  );
};

export default LectureDetails;

const DetailsContainer = styled.div`
  width: 100%;
  background-image: url(${(props) => props.image});
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled(AiOutlineCloseCircle)`
  margin-right: 10px;
  padding: 5px;
  font-size: 2.5rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  align-self: flex-end;
  cursor: pointer;
`;

const DetailsTitle = styled.span`
  font-size: 2rem;
  font-weight: bolder;
`;
