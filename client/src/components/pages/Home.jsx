import React, { useState, useEffect } from 'react';
import UserData from '../UserData';
import ClassData from '../ClassData';

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
