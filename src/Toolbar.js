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

function Toolbar(props) {
    const location = useLocation();
    if (location.pathname==="/login") return null;
    return (
        <div style = {styles.container}>
            <span style={styles.box}>
                <Link to="/login"> 로그인(툴바)</Link>
            </span>
            <span style={styles.box}>메뉴1</span>
            <span style={styles.box}>메뉴2</span>
        </div>
    )
}
export default Toolbar

