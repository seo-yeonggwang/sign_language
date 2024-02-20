import React, { useState, useEffect } from 'react';
import Progress from '../Loading';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function JsonTest(props){
    return(
      <div key = {props.id} style = {{margin: "35px", backgroundColor: " #007bff45"}}>
        <p>id: {props.id}</p>
        <p>pswd: {props.pswd}</p>
        <p>이름: {props.name}</p>
        <p>학습진행도: {props.progress}</p>
     </div>
    )
}

const Home = () => {
  const [data, setData] = useState(null); // 빈 배열이 아닌 null로 해야 Progress 컴포넌트 렌더링

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => { // Progress 컴포넌트 확인용 딜레이
      fetch('/api/test')  //await?
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
        <JsonTest id = {d.id} pswd = {d.pswd} name = {d.name} progress = {d.progress}></JsonTest>
      )): <Progress/>}
    </>
  );
};

export default Home;
