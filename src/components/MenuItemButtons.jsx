import "./../css/MenuItemButtons.css";
import {Link} from "react-router-dom";

const MenuItemButtons = () => {
    return (
        <Link to="#" className="link buttons-link">
            <div className="counter-buttons one">
                <button className="minus">-</button>
                <span className="counter">1</span>
                <button className="plus">+</button>
            </div>
        </Link>
    );
};

export default MenuItemButtons;