import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';

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

function User(props) {
    const location = useLocation();
    if (location.pathname === "/login" || location.pathname === "/register") return null;
    return (
        <Container>
            <LoginButton/>
        </Container>
    )
}
export default User

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;
const Text = styled.span`
    padding:5px;
`;