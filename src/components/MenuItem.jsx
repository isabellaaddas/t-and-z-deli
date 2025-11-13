import "./../css/MenuItem.css";
import {Link} from "react-router-dom";
import MenuItemText from "./MenuItemText";

const MenuItem = (props) => {
    return (
        <Link to={"/orders/"+props.id} className="link">
            <div className="menu-item columns">
                <div className="menu-item-img one"><img src={"https://server-t-and-z-deli.onrender.com/images/" + props.image}/></div>
            
                <MenuItemText name={props.name} price={props.price} description={props.description}/>
            </div>
        </Link>
        
    );
};

export default MenuItem;