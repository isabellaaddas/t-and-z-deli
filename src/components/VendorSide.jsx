import "./../css/VendorSide.css";
import farmPic from "./../images/farm-map.png";
import deliveryPic from "./../images/delivery-supplier.jpg";

const VendorSide = (props) => {
    if (props.side == "left") {
        return (
            <div id="farm-text" className="one">
                <h2>Local Farms</h2>

                <p>T & Z Deli takes pride in using only the freshest, highest quality produce around for all of our ingredients. Should a recipe call for produce, meat, dairy, or anything fresh, there will be a local farm delivering those ingredients. Our farming suppliers include Best of Jersey Farms, The Jersey-York Point, Amarillo Hillside, and Han's Family Farms. All of these farms supply 100% of our fresh ingredients, from cold cuts to every tomato that is used in our recipes. T & Z Deli is always open to establishing new relationships with the farms around us for a variety of new ingredients to bring to the table.</p>
            
                <div id="farm-map"><img src={farmPic}/></div>
            </div>
        );
    } else if (props.side == "right") {
        return (
            <div id="supplier-text" className="one">
                <h2>Trustworthy Suppliers</h2>

                <p>Quality is key at T & Z Deli, which includes all imported goods sold and used at the store. From kitchen ingredients to jarred goods, every product is of the best quality, regardless of the cost. Our international suppliers include The Gallante House, Italy's Finest, South Korean Globl Shippers, Gangwon International, and The Korean Market. Our national suppliers include The Flour Estate, Chips Galore, Pickled Perfection, and American Roadtrip. These suppliers bring the best ingredients for every single thing you see and eat in the store, adding the toppings to your favorite sandwich order or giving the chips to go with it.</p>
            
                <div id="delivery-truck"><img src={deliveryPic}/></div>
            </div>
        );
    }
};

export default VendorSide;