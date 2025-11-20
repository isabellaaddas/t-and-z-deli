import "./../css/Dialog.css";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const DeleteMenuItem = (props) => {
    const navigate = useNavigate();
    const [result, setResult] = useState("");

    const deleteItem = async() => {
        const response = await fetch(`https://server-t-and-z-deli.onrender.com/api/orders/${props.id}`, {
            method:"DELETE"
        });

        if(response.status === 200) {
            setResult("Deleted order!");
            props.closeDeleteDialog();
            navigate("/order");
        } else {
            setResult("Error deleting order.");
        }
    };

    return (
        <div id="delete-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="close-span" className="w3-button w3-display-topright" onClick={props.closeDeleteDialog}>&times;</span>
                    
                    <h3>Delete {props.order.name}?</h3>
                    <p>This cannot be undone.</p>

                    <div className="yes-no-buttons">
                        <button className="submit-button" onClick={props.closeDeleteDialog}>No</button>
                        <button className="submit-button" onClick={deleteItem}>Yes</button>
                    </div>

                    <span>{result}</span>
                </div>
            </div>
        </div>
    );
};

export default DeleteMenuItem;