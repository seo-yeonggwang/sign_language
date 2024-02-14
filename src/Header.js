import { Link } from 'react-router-dom';
import Toolbar from "./Toolbar";
import LoginButton from "./LoginButton";

function Header(props) {
    return (
        <div className="Header">
            <LoginButton/>
            <h1>
                <Link to="/">
                    홈(헤더)
                </Link>
            </h1>
            <Toolbar/>
        </div>
    );
}

export default Header;
