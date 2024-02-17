import { Link } from 'react-router-dom';
import Toolbar from "./Toolbar";
import User from "./User";
import Logo from "./images/Logo.png";

function Header(props) {
    return (
        <div className="Header">
            <User/>
                <Link to="/">
                    <img src={Logo}/>
                </Link>
            <Toolbar/>
        </div>
    );
}

export default Header;
