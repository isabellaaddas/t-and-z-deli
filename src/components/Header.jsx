import Navigation from "./Navigation";
import SmallNavigation from "./SmallNavigation";
import "./../css/Header.css"
import {Link} from "react-router-dom";
import logo from "./../images/deli-logo.png";

const Header = () => {
    return (
        <header>
            <div id="logo-bg">
                <div id="logo">
                    <Link to="/"><img src={logo} alt="Logo"/></Link>
                </div>
            </div>

            <SmallNavigation />

            <Navigation />
        </header>
    );
};

export default Header;