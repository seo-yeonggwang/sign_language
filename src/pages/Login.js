const styles = {
	block: {
		display: "block",
	},
    text: {
        display: "inline-block",
        width: "70px",
    }
};

function Login(props){
    return (
        <div>
            <div>로그인 페이지</div>
            <form>
                <div>
                    <span style = {styles.text}>ID </span>
                    <input type="text"></input>
                </div>

                <div>
                    <span style = {styles.text}>PSWD </span>
                    <input type="password"></input>
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
}
export default Login