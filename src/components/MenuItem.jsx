import "./../css/MenuItem.css";
import {Link} from "react-router-dom";
import MenuItemText from "./MenuItemText";

const MenuItem = (props) => {
    return (
        <div className="menu-item columns">
            <div className="menu-item-img one"><Link to={"/orders/"+props.id}><img src={"https://server-t-and-z-deli.onrender.com/images/" + props.image}/></Link></div>
        
            <MenuItemText name={props.name} price={props.price} description={props.description}/>
        </div>
    );
};

export default MenuItem;