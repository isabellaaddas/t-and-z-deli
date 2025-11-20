import "./../css/Dialog.css";
import {useState} from "react";

const EditMenuItem = (props) => {
     const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const editItem = async(event) => {
        event.preventDefault();
        setResult("Editing item...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch(`https://server-t-and-z-deli.onrender.com/api/orders/${props.id}`, {
            "method":"PUT",
            "body":formData
        });

        if (response.status == 200) {
            setResult("Edited order!");
            event.target.reset();
            props.closeEditDialog();
            props.updateOrder(await response.json());
        } else {
            setResult("Error editing order.");
        }
    };

    return (
        <div id="edit-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="close-span" className="w3-button w3-display-topright" onClick={props.closeEditDialog}>&times;</span>
                    
                    <form id="edit-order-form" onSubmit={editItem}>
                        <h2>Edit Menu Item</h2>

                        <p className="columns">
                            <label htmlFor="name">Name of Item:</label><br/>
                            <input type="text" id="name" name="name" required min="3" defaultValue={props.order.name}></input>
                        </p>

                        <input type="hidden" id="category" name="category" defaultValue={props.order.category} required></input>

                        <p className="columns">
                            <label htmlFor="price">Set Price:</label><br/>
                            <input type="number" step="0.01" name="price" id="price" required min="0.10" defaultValue={props.order.price}></input>
                        </p>

                        <p className="columns">
                            <label htmlFor="description">Give a brief description of the item:</label><br/>
                            <textarea name="description" id="description" required min="10" defaultValue={props.order.description}></textarea>
                        </p>

                        <p className="columns">
                            <label htmlFor="ingredients">List ingredients (comma-separated):</label><br/>
                            <textarea name="ingredients" id="ingredients" required min="3" defaultValue={props.order.ingredients}></textarea>
                        </p>

                        <p className="columns">
                            <label htmlFor="allergens">List allergens (comma-separated):</label><br/>
                            <textarea name="allergens" id="allergens" required min="3" defaultValue={props.order.allergens}></textarea>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc != "" ? (<img id="img-preview" src={prevSrc}/>)
                                                    :(<img id="img-preview" src={"https://server-t-and-z-deli.onrender.com/images/" + props.order.img}/>)}
                                </p>
                            </div>

                            <p id="img-upload">
                                <label htmlFor="img">Upload Menu Image: </label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage}/>
                            </p>
                        </section>

                        <p>
                            <button type="submit" className="submit-button">Submit</button>
                        </p>

                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditMenuItem;