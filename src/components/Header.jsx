import logo from '../images/logo_kasa.svg';
import LinksNav from './LinksNav';
import { NavLink } from 'react-router-dom'
function Header(){
    return(
        <header>
                <div className="logo">
                    <img src={logo} alt="logo kasa" />
                </div>
                <div className="menu">
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </div>
        </header>
    )
}


export default Header;