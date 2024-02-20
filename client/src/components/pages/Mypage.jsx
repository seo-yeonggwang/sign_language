import styled from 'styled-components';
import UserData from '../UserData';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

function Mypage(props){
    const [cookie, setCookie, removeCookie] = useCookies(['id']);
    const navigate = useNavigate();

    const secession = () => {
        const confirmSecession = window.confirm('정말 탈퇴하시겠습니까?');
        if (confirmSecession) {
            removeCookie('id'); // 로그인 인증 삭제
            localStorage.removeItem(cookie.id); // 로컬 스토리지 데이터 삭제
            alert('회원 탈퇴가 완료되었습니다.');
            navigate('/');
        }
    };

    if (cookie.id==="user"){ // 관리자: 회원 목록 확인
        return (
            <UserData/>
        )
    }
    
    return (
        <>
            <h1>마이페이지</h1>
            <button onClick={secession}>회원 탈퇴</button>
        </>
    )
}
export default Mypage