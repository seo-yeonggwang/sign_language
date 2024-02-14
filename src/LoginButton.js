import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const styles = {
	container: {
		display: "flex",
        flexDirection: "row-reverse",
	},
    box: {
        padding: "5px",
    },
};

function LoginButton(props) {
    const location = useLocation();
    if (location.pathname==="/login") return null;
    return (
        <div style = {styles.container}>
            <span style={styles.box}>
                <Link to="/login" style={{ textDecoration: "none"}}> 로그인</Link>
            </span>
        </div>
    )
}
export default LoginButton

