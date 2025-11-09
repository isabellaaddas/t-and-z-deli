import "./../css/Orders.css";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";

const Orders = () => {
    const param = useParams();
    const [order, setOrder] = useState({});

    useEffect(() => {
        const loadOrder = async() => {
            const response = await axios.get("https://server-t-and-z-deli.onrender.com/api/orders/" + param.id);
            setOrder(response.data);
        };

        loadOrder();
    }, []);

    const printIngrList = () => {
        let list = "";

        (order.ingredients)?.forEach((ingr, i, arr) => {
            if (i == arr.length - 2) {
                list += ingr + ", and ";
            } else if (i == arr.length - 1) {
                list += ingr + ".";
            } else {
                list += ingr + ", ";
            }
        });

        return list;
    }

    const printAllergenList = () => {
        let list = "";

        (order.allergens)?.forEach((aller, i, arr) => {
            if (i == arr.length - 2) {
                list += aller + ", and ";
            } else if (i == arr.length - 1) {
                list += aller + ".";
            } else {
                list += aller + ", ";
            }
        });

        return list;
    }

    return (
        <main id="orders" className="previews columns">
            <div className="item-img four"><img src={"https://server-t-and-z-deli.onrender.com/images/" + order.img}/></div>

            <div className="item-text five">
                <h2>{order.name}</h2>

                <h3>Ingredients</h3>
                <p>{order.description} Includes: {printIngrList()}</p>

                <h3>Allergen Information</h3>
                <p>Contains: {printAllergenList()} Substitutions can be made upon request. Cross-contamination may include contact with other gluten products, dairy products, meat products, nuts, eggs, soy, and fish.</p>
            </div>
        </main>
    )
};

export default Orders;