import { Link } from 'react-router-dom';
import Toolbar from "./Toolbar";
import LoginButton from "./LoginButton";
import Logo from "./images/Logo.png";

function Header(props) {
    return (
        <div className="Header">
            <LoginButton/>
                <Link to="/">
                    <img src={Logo}/>
                </Link>
            <Toolbar/>
        </div>
    );
}

export default Header;
