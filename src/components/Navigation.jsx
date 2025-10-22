import "./../css/Navigation.css";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul id="nav-items" class="columns hide-small">
                <li class="one"><Link to="/about" class="links">About Us</Link></li>
                <li class="one"><Link to="/order" class="links">Order</Link></li>
                <li class="one"><Link to="/catering" class="links">Catering</Link></li>
                <li class="one"><Link to="/careers" class="links">Careers</Link></li>
                <li class="one"><Link to="/vendors" class="links">Our Vendors</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;