import styled from 'styled-components';

function Login(props){
    return (
        <div>
            <div>로그인 페이지</div>
            <form>
                <div>
                    <Label>ID </Label>
                    <input type="text"></input>
                </div>

                <div>
                    <Label>PSWD </Label>
                    <input type="password"></input>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}
export default Login

const Label = styled.label`
    display: inline-block;
    width: 70px;
`;