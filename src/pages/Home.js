import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈 페이지</h1>
      <p>앱의 홈 페이지입니다.</p>
      <Link to="/quiz">퀴즈 시작</Link>
    </div>
  );
};

export default Home;