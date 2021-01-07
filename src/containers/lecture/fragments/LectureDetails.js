import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const LectureDetails = ({ lecture, setLecture }) => {
  const [date, setDate] = useState(new Date());
  const [dataObj, setDataObj] = useState({
    data: "",
    time: "",
    items: [],
    service: "",
  });
  console.log(date);

  return (
    <DetailsContainer image={lecture.image2}>
      <BackBtn onClick={() => setLecture({})} />
      <DetailsTitle>{lecture.name} Class</DetailsTitle>
      <Calendar onChange={setDate} date={date} />
    </DetailsContainer>
  );
};

export default LectureDetails;

const DetailsContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled(AiOutlineCloseCircle)`
  margin: 10px 10px 0 0;
  padding: 5px;
  font-size: 2.5rem;
  color: white;
  border-radius: 50%;
  align-self: flex-end;
  cursor: pointer;
`;

const DetailsTitle = styled.span`
  font-size: 2rem;
  color: white;
`;
