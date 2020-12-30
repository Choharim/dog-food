import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Frame = ({ children }) => {
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const setFrameSize = () => {
      setHeight(window.innerHeight);
    };
    setFrameSize();
    window.addEventListener("resize", setFrameSize);
    return window.removeEventListener("resize", setFrameSize);
  }, []);
  return <Body height={height}>{children}</Body>;
};

export default Frame;

const Body = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 600px;
  min-height: ${(props) => `${props.height}px`};
`;
