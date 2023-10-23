import Fb from "../public/Images/facebook.webp";
import Ig from "../public/Images/instagram.webp";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
    <footer>
        <h2 className="elem-foot">Digitalers! &copy;</h2>
        <a className="elem-foot" href="https://www.facebook.com">
            <img src={Fb} width="25" height="25" alt="Facebook" />
        </a>
        <a className="elem-foot" href="https://www.instagram.com">
            <img src={Ig} width="25" height="25" alt="Instagram" />
        </a>
    </footer>);
};

export default Footer;
