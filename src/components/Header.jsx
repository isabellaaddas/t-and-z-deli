import Navigation from "./Navigation";
import SmallNavigation from "./SmallNavigation";
import "./../css/Header.css"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div id="logo-bg">
                    <div id="logo">
                        <Link to="/">
                            <img src="./../images/deli-logo.png"/>
                        </Link>
                    </div>
                </div>

                <SmallNavigation />

                <Navigation />
            </header>
        </>
        
    );
};

export default Header;