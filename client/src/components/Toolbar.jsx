import React from "react";
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Toolbar(props) {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") return null;

  return (
    <Container>
        
        <Link to="/" style={{ textDecoration: "none"}}>
            <Menu>소개</Menu>
        </Link>

        <Link to="/study-main" style={{ textDecoration: "none"}}>
            <Menu>학습하기</Menu>
        </Link>

        <Link to="/mypage" style={{ textDecoration: "none"}}>
            <Menu>마이페이지</Menu>
        </Link>
      
    </Container>
  );
}

export default Toolbar;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    background: #007bff45;
    padding: 10px;
`;

const Menu = styled.div`
    border-radius: 0.5rem;
    padding: 0.6rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    background: white;
`;
