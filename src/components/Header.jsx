import logo from '../images/logo_kasa.svg';
import LinksNav from './LinksNav';


function Header(){
    return(
        <header>
                <div className="logo">
                    <img src={logo} alt="logo kasa" />
                </div>
                <div className="menu">
                    <LinksNav texte="Accueil" url='#' />
                    <LinksNav texte="A propos" url="#" />
                </div>
        </header>
    )
}

export default Header;