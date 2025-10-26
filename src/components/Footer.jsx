import "./../css/Footer.css"
import {Link} from "react-router-dom";

const Footer = (props) => {
    return (
        <footer className="special-columns">
            <div id="footer-contact" className="one"><h4><Link to="/contact" className="link">Contact Us</Link></h4></div>
            <div id="footer-info1" className="one"><h4>{props.phone}</h4></div>
            <div id="footer-info2" className="one"><h4>{props.email}</h4></div>
        </footer>
    );
};

export default Footer;