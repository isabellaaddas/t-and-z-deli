import "./../css/Navigation.css";
import {Link} from "react-router-dom";
import {useState} from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="main-nav">
            <div onClick={toggleNav} id="small-toggle-nav">
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul id="nav-items" className={menuOpen ? "columns":"columns hide-small"}>
                <li className="one"><Link to="/about" className="nav-links">About Us</Link></li>
                <li className="one"><Link to="/order" className="nav-links">Order</Link></li>
                <li className="one"><Link to="/catering" className="nav-links">Catering</Link></li>
                <li className="one"><Link to="/careers" className="nav-links">Careers</Link></li>
                <li className="one"><Link to="/vendors" className="nav-links">Our Vendors</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;