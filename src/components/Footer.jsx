import logo from '../images/logo_kasa_footer.png'
function Footer(){
    const year = new Date().getFullYear();
    return(
<footer>
    <img src={logo} alt="logo kasa" />
    <p>© {year} Kasa. All rights reserved</p>
</footer>
    )
}

export default Footer;