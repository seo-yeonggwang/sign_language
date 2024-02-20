import styled from 'styled-components';
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const dummy = {id: "user", pswd: "1111"}; // 비밀번호가 매우 단순해 크롬으로 로그인 성공시 경고 메시지 출력됨

function Login(){
    const navigate = useNavigate(); // history: 구버전
    const [cookies, setCookie] = useCookies(['id']);
    if (cookies.id){ // 로그인 후 페이지 접근시 홈으로
        navigate('/');
    }

    let id = ""; 
    let pswd = ""; 
    const [showPassword, setShowPassword] = useState(false);
    // const [loading, setLoading] = useState(false);   // 로딩 시간이 길 경우 사용 가능
    
    const handleSubmit = async e => {
        e.preventDefault(); // 새로고침 방지

        if (id===dummy.id && pswd===dummy.pswd){
            alert("관리자 계정 로그인 성공");
            setCookie('id', "user")
            navigate('/'); // 홈으로 이동
            return;
        }

        // 로컬 스토리지 이용한 회원가입 데이터로 로그인
        const userDataString = localStorage.getItem(id);

        if (!userDataString) {
            alert("존재하지 않는 ID입니다.");
            return;
        }
        // userDataString ---파싱---> js 객체
        const userData = JSON.parse(userDataString);

        if (pswd === userData.pswd){ // 로그인 성공
            // setLoading(true); // 로딩
            // await new Promise(r => setTimeout(r, 1000)); // r: resolve, r은 임의적 이름 (로딩 시간)
            setCookie('id', id)
            navigate('/'); // 홈으로 이동
            // setLoading(false);
        }
        else{
            alert("비밀번호를 확인해주세요.");
        }
    };
  

    // if (loading) {
    //   return <h1>Logging in...</h1>;
    // }
    return (
        <div>
            <div>로그인 페이지</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <Label>ID </Label>
                    <input 
                        type="text"
                        placeholder="ID"
                        onChange={(e) => id = e.target.value}
                    ></input>
                </div>

                <div>
                    <Label>PSWD </Label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="PSWD"
                        onChange={(e) => pswd = e.target.value}
                    ></input>
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        비밀번호 표시
                    </label>
                </div>
                <button type="submit">로그인</button>
                <Link to="/register">
                    <button>회원가입</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;

const Label = styled.label`
    display: inline-block;
    width: 70px;
`;