import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


const styles = {
	container: {
		display: "flex",
        justifyContent: "space-evenly",
        background: "#007bff45",
        padding: "10px",

    },
    box: {
        padding: "5px",
        background: "white",
    },
};

function Toolbar(props) {
    const location = useLocation();
    if (location.pathname==="/login") return null;
    return (
        <div style = {styles.container}>
            <span></span>
            <span style={styles.box}>소개</span>
            <span style={styles.box}>학습하기</span>
            <span style={styles.box}>마이페이지</span>
            <span></span>
        </div>
    )
}
export default Toolbar

