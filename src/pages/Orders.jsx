import "./../css/Orders.css";
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from "axios";
import EditDeleteButtons from "./../components/EditDeleteButtons";
import EditMenuItem from "./../components/EditMenuItem";
import DeleteMenuItem from "./../components/DeleteMenuItem";

const Orders = () => {
    const param = useParams();
    const [order, setOrder] = useState({});
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    useEffect(() => {
        const loadOrder = async() => {
            const response = await axios.get("https://server-t-and-z-deli.onrender.com/api/orders/" + param.id);
            setOrder(response.data);
        };

        loadOrder();
    }, []);

    const updateOrder = (order) => {
        setOrder(order);
    }

    const closeAnyDialog = () => {
        setShowEdit(false);
        setShowDelete(false);
    }

    const openEditDialog = () => {
        setShowEdit(true);
    }

    const openDeleteDialog = () => {
        setShowDelete(true);
    }

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
            {showEdit ? (<EditMenuItem closeEditDialog={closeAnyDialog} 
                        updateOrder={updateOrder} order={order}
                        id={param.id}/>):("")}
            {showDelete ? (<DeleteMenuItem closeDeleteDialog={closeAnyDialog}
                            order={order} id={param.id}/>):("")}

            <div className="item-img four"><img src={"https://server-t-and-z-deli.onrender.com/images/" + order.img}/></div>

            <div className="item-text five">
                <div className="special-columns">
                    <p><Link to="/order"><button className="back-button">&lt;</button></Link></p>

                    <h2>{order.name}</h2>
                </div>
                

                <h3>Ingredients</h3>
                <p>{order.description} Includes: {printIngrList()}</p>

                <h3>Allergen Information</h3>
                <p>Contains: {printAllergenList()} Substitutions can be made upon request. Cross-contamination may include contact with other gluten products, dairy products, meat products, nuts, eggs, soy, and fish.</p>

                <EditDeleteButtons order={order} 
                        openEditDialog={openEditDialog}
                        openDeleteDialog={openDeleteDialog}/>
            </div>
        </main>
    );
};

export default Orders;