import React, { useState, useEffect } from 'react';
import UserData from '../components/UserData';
import ClassData from '../components/ClassData';

const Home = () => {
  return (
    <>
    <h1>홈(소개) 페이지</h1>
      <div>nodejs 테스트</div>
      <UserData/>
      <ClassData/>
    </>
  );
};

export default Home;
