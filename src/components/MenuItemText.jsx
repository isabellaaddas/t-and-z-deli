import "./../css/MenuItemText.css";
import {Link} from "react-router-dom";
import MenuItemButtons from "./MenuItemButtons";

const MenuItemText = (props) => {
    return (
        <div className="menu-item-text three">
            <div className="top-text special-columns">
                <h4 className="one"><Link className="link" to="#">{props.name}</Link></h4>

                <MenuItemButtons />

                <h4 className="one">${props.price}</h4>
            </div>

            <div className="bottom-text">
                <p>{props.description}</p>
            </div>
        </div> 
    );
};

export default MenuItemText;