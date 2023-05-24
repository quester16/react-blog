import './Header.scss'
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                saidburhon
            </div>
            <nav className="nav">
                <ul className="links">
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Галерея</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;