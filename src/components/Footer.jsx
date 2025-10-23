import "./../css/Footer.css"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer class="special-columns">
            <div id="footer-contact" class="one"><h4><Link to="/contact" class="link">Contact Us</Link></h4></div>
            <div id="footer-info1" class="one"><h4>(973) 207-3474</h4></div>
            <div id="footer-info2" class="one"><h4>teezeedeli@company.com</h4></div>
        </footer>
    );
};

export default Footer;