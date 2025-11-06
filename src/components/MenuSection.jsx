import "./../css/MenuSection.css";
import MenuItem from "./MenuItem";
import {useState, useEffect} from "react";
import axios from "axios";

const MenuSection = (props) => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const loadOrders = async() => {
            const response = await axios.get("https://server-t-and-z-deli.onrender.com/api/orders");
            setOrders(response.data);
        };

        loadOrders();
    }, []);

    if (props.ident == "sandwiches") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "sandwich";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "soups") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "soup";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "cold-cuts") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "cold-cut";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "jarred-goods") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "jarred";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "cheese") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "cheese";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "extras") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "extra";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    } else if (props.ident == "desserts") {
        return (
            <div id={props.ident} className="menu-section">
                <h1>{props.category}</h1>

                {orders.filter((order) => {
                    return order.category == "dessert";
                }).map((order) => {
                    return (
                        <MenuItem   name={order.name}
                                    price={order.price}
                                    image={order.img}
                                    description={order.description}
                                    key={order._id}
                                    id={order._id} />
                    );
                })}
            </div>
        );
    }
};

export default MenuSection;