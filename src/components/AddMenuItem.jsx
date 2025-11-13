import "./../css/AddMenuItem.css";
import {useState} from "react";

const AddMenuItem = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addItem = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Uploading new item...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("https://server-t-and-z-deli.onrender.com/api/orders", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("Added new order!");
            event.target.reset();
            props.closeDialog();
            props.updateMenu(await response.json());
        } else {
            setResult("Error adding order.");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="close-span" className="w3-button w3-display-topright" onClick={props.closeDialog}>&times;</span>
                    
                    <form id="add-order-form" onSubmit={addItem}>
                        <h2>Add New Menu Item</h2>

                        <p className="columns">
                            <label htmlFor="name">Name of Item:</label><br/>
                            <input type="text" id="name" name="name" required min="3"></input>
                        </p>

                        <input type="hidden" id="category" name="category" value={props.category} required></input>

                        <p className="columns">
                            <label htmlFor="price">Set Price:</label><br/>
                            <input type="number" step="0.01" name="price" id="price" required min="0.10"></input>
                        </p>

                        <p className="columns">
                            <label htmlFor="description">Give a brief description of the item:</label><br/>
                            <textarea name="description" id="description" required min="10"></textarea>
                        </p>

                        <p className="columns">
                            <label htmlFor="ingredients">List ingredients (comma-separated):</label><br/>
                            <textarea name="ingredients" id="ingredients" required min="3"></textarea>
                        </p>

                        <p className="columns">
                            <label htmlFor="allergens">List allergens (comma-separated):</label><br/>
                            <textarea name="allergens" id="allergens" required min="3">none of the common allergens</textarea>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc != "" ? (<img id="img-preview" src={prevSrc}/>)
                                                    :("")}
                                </p>
                            </div>

                            <p id="img-upload">
                                <label htmlFor="img">Upload Image: </label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} required/>
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>

                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMenuItem;