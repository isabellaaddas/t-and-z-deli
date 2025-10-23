import "./../css/Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul id="nav-items" className="columns hide-small">
                <li class="one"><Link to="/about" className="nav-links">About Us</Link></li>
                <li class="one"><Link to="/order" className="nav-links">Order</Link></li>
                <li class="one"><Link to="/catering" className="nav-links">Catering</Link></li>
                <li class="one"><Link to="/careers" className="nav-links">Careers</Link></li>
                <li class="one"><Link to="/vendors" className="nav-links">Our Vendors</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;