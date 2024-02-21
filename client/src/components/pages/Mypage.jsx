import styled from 'styled-components';
import UserData from '../UserData';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Mypage(props){
    const [cookie, setCookie, removeCookie] = useCookies(['id']);
    const navigate = useNavigate();

    const secession = () => {
        const confirmSecession = window.confirm('정말 탈퇴하시겠습니까?');
        if (confirmSecession) {
            removeCookie('id'); // 로그인 인증 삭제
            axios.delete(`/api/secession/${cookie.id}`)
            .then(response=>{
                alert('회원 탈퇴가 완료되었습니다.');
                navigate('/');
            })
            .catch(err=>console.error('Error: ', err));
        }
    };
    
    return (
        <>
            <h1>마이페이지</h1>
            <button onClick={secession}>회원 탈퇴</button>
        </>
    )
}
export default Mypage