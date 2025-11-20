import "./../css/MenuSection.css";
import MenuItem from "./MenuItem";
import AddMenuItem from "./AddMenuItem";
import {useState, useEffect} from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";

const MenuSection = (props) => {
    const location = useLocation();
    const [orders, setOrders] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = (event) => {
        event.preventDefault();
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        setShowAddDialog(false);
    }

    const updateMenu = (order) => {
        setOrders((orders) => [...orders, order]);
    }

    useEffect(() => {
        const loadOrders = async() => {
            const response = await axios.get("https://server-t-and-z-deli.onrender.com/api/orders");
            if (props.ident == "sandwiches") {
                setOrders(response.data.filter((order) => {
                    return order.category == "sandwich";
                }));
            } else if (props.ident == "soups") {
                setOrders(response.data.filter((order) => {
                    return order.category == "soup";
                }));
            } else if (props.ident == "cold-cuts") {
                setOrders(response.data.filter((order) => {
                    return order.category == "cold-cut";
                }));
            } else if (props.ident == "jarred-goods") {
                setOrders(response.data.filter((order) => {
                    return order.category == "jarred";
                }));
            } else if (props.ident == "cheese") {
                setOrders(response.data.filter((order) => {
                    return order.category == "cheese";
                }));
            } else if (props.ident == "extras") {
                setOrders(response.data.filter((order) => {
                    return order.category == "extra";
                }));
            } else if (props.ident == "desserts") {
                setOrders(response.data.filter((order) => {
                    return order.category == "dessert";
                }));
            }
        };

        loadOrders();
    }, [location]);

    return (
        <div id={props.ident} className="menu-section">
            <div className="special-columns title">
                <h1 className="seven">{props.category}</h1>

                <button onClick={openAddDialog} className="add-item">+</button>
                {showAddDialog ? (<AddMenuItem closeDialog={closeAddDialog}
                                        updateMenu={updateMenu}
                                        category={props.ident}/>):("")}
            </div>

            {orders.map((order) => {
                return (
                    <MenuItem   name={order.name}
                            price={order.price}
                            image={order.img}
                            description={order.description}
                            key={order._id}
                            id={order._id}
                            updateMenu={updateMenu}/>
                );
            })}
        </div>
    );
};

export default MenuSection;