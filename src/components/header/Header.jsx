import {Link, NavLink} from "react-router-dom";

import './Header.scss'
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <Link to='/'> r.saidburhon</Link>
            </div>
            <nav className="nav">
                <ul className="links">
                    <li>
                        <NavLink style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                                 end to='/'>Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink style={({ isActive, isPending }) => {
                            return {
                                fontWeight: isActive ? "bold" : "",
                                color: isPending ? "red" : "black",
                            };
                        }}
                                 to='/gallery'>Галерея
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;