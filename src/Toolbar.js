import React from "react";
import { Link, useLocation } from 'react-router-dom';

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    background: "#007bff45",
    padding: "10px",
  },
  box: {
    padding: "5px",
    background: "white",
  },
};

function Toolbar(props) {
  const location = useLocation();

  if (location.pathname === "/login") return null;

  return (
    <div style={styles.container}>
      <Link to="/">
        <span style={styles.box}>홈</span>
      </Link>
      <Link to="/intro">
        <span style={styles.box}>소개</span>
      </Link>
      <Link to="/study">
        <span style={styles.box}>학습하기</span>
      </Link>
      <Link to="/mypage">
        <span style={styles.box}>마이페이지</span>
      </Link>
    </div>
  );
}

export default Toolbar;
