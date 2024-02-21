import React, { useState, useEffect } from 'react';
import Webcam from '../Webcam';
import Video from '../Video';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';

function Study() {
  const [urlId, setUrlId] = useState(null);
  const location = useLocation();
  const c_id = location.pathname.split("/")[2];
  useEffect(()=>{
    const getChapter = async ()=>{
      await axios.get(`/api/getURL/?class_id=${c_id}`)
      .then(res=> setUrlId(res.data.URL))
      .catch(err=>console.error("Error: ", err));
    };
    getChapter();
  }, []);
  return (
    <>
      <h1>학습 페이지</h1>
      {urlId}
      <Container>
        {urlId ? <Video videoId={urlId} /> : <Loading></Loading>}
        <Webcam/>
      </Container>
    </>
  );
}

export default Study;

const Container = styled.div`
  display: flex;
`;