import React, { useEffect, useRef } from 'react';
import Webcam from '../Webcam';
import Video from '../Video';
import styled from 'styled-components';
function Study() {

  return (
    <>
      <h1>학습 페이지</h1>
      <Container>
        <Video videoId="pQUWOFbL10g" />
        <Webcam/>
      </Container>
    </>
  );
}

export default Study;

const Container = styled.div`
  display: flex;
`;