import "./../css/Footer.css"
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer class="special-columns">
            <div id="footer-contact" class="one"><h4><Link to="/contact" class="link">Contact Us</Link></h4></div>
            <div id="footer-info1" class="one"><h4>{props.phone}</h4></div>
            <div id="footer-info2" class="one"><h4>{props.email}</h4></div>
        </footer>
    );
};

export default Footer;