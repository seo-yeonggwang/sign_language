import { Link } from 'react-router-dom';
import Toolbar from "./Toolbar";


function Header(props) {
    return (
        <div className="Header">
            <Toolbar/>
            <h1>

                <Link to="/">
                    홈(헤더)
                </Link>
            </h1>
        </div>
    );
}

export default Header;
