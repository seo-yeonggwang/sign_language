import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Logo from "../images/Logo.png";

function LoginButton(props){
    const [cookies, setCookie, removeCookie] = useCookies(['id']);

    const Logout = () => {
        removeCookie('id');
    };

    if (cookies.id){ //logined
        return(
            <>
            <Text onClick={Logout}>
                로그아웃
            </Text>
            <Text>
                환영합니다! {cookies.id}님
            </Text>
            </>     
        );
    }
    else{
        return(
            <>
            <Text>
                <Link to="/login" style={{ textDecoration: "none"}}> 로그인</Link>
            </Text>
            <Text>
                <Link to="/register" style={{ textDecoration: "none"}}> 회원가입</Link>
            </Text>
            </>
        );
    }
}
function Toolbar(props) {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") return null;

  return (
    <Container  className="Header">
        <Link to="/">
            <img src={Logo}/>
        </Link>
        
        <Link to="/" style={{ textDecoration: "none"}}>
            <Menu>소개</Menu>
        </Link>

        <Link to="/select-difficulty" style={{ textDecoration: "none"}}>
            <Menu>학습하기</Menu>
        </Link>

        <Link to="/mypage" style={{ textDecoration: "none"}}>
            <Menu>마이페이지</Menu>
        </Link>
        <LoginButton/>
      
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

const Text = styled.span`
    padding:5px;
`;