import styled from 'styled-components';
import {useState} from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';


function Register(){
    const navigate = useNavigate();
    const [cookies] = useCookies(['id']);
    if (cookies.id){ // 로그인 후 페이지 접근시 홈으로
        navigate('/');
    }

    let id = ""; 
    let pswd = ""; 
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (id==="" || pswd==="") alert("아이디와 비밀번호를 입력해주세요.");
        else if (!!localStorage.getItem(id)) alert("이미 존재하는 아이디 입니다.");
        else{
            const userData = {
                pswd: pswd
            };
            localStorage.setItem(id, JSON.stringify(userData));
            alert('회원가입이 완료되었습니다.');
            navigate('/'); // 홈으로 이동
        }
    };
    return(
        <div>
            <div>회원가입 페이지</div>
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
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Register;

const Label = styled.label`
    display: inline-block;
    width: 70px;
`;