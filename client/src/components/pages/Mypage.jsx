import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading';
import axios from 'axios';

function Mypage(props){
    const [userData, setUserData] = useState(null);
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
    useEffect(()=>{
        const getUserData = async ()=>{
          await axios.get(`/api/getUserData/1/?id=${cookie.id}`)
          .then(res=> setUserData(res.data))
          .catch(err=>console.error("Error: ", err));
        };
        getUserData(); 
    }, []);
    
    return (
        <>
            <h1>마이페이지</h1>

            {userData ? 
                <>
                <h4>id: {userData.id}</h4>
                <h4>pswd: {userData.pswd}</h4>
                <h4>이름: {userData.name}</h4>  
                </>
            : <Loading/>}
            
            <button onClick={secession}>회원 탈퇴</button>
        </>
    )
}
export default Mypage