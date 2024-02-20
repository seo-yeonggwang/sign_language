import React, { useState, useEffect } from 'react';
import Progress from '../Progress';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState(null); // 빈 배열이 아닌 null로 해야 Progress 컴포넌트 렌더링

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => { // Progress 컴포넌트 확인용 딜레이
      fetch('/api/test/')  //await?
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(body=>setData(body))
      .catch(err=>console.error('Error fetching data:', err));
      }, 2000); // 2초 딜레이
    };
    fetchData();
  }, []);

  return (
    <>
    <h1>홈(소개) 페이지</h1>
      <div>서버 json 테스트</div>
      {data ? data.map(d=>(
          <div key = {d.id}>
           <p>{d.id}</p>
           <p>{d.pswd}</p>
           <p>{d['learning-progress']}</p>
          </div>
      )): <Progress/>}
    </>
  );
};

export default Home;
