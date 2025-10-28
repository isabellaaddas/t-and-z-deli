import "./../css/MiniMenu.css";

const MiniMenu = (props) => {
    if (props.category == "sandwiches") {
        return (
            <div className="mini-menu">
                <p>20 CT TRAYS ...... $109.99</p>
                <p>30 CT TRAYS ...... $159.99</p>
                <p>50 CT TRAYS ...... $349.99</p>
                
                <select id="s-sandwiches" name="s-sandwiches">
                    <option value="" disabled selected hidden>Sandwich Type</option>
                    <option value="naples" name="naples">Naples Style</option>
                    <option value="sicilian" name="sicilian">Sicilian Blend</option>
                    <option value="calabrese" name="calabrese">Calabrese Special</option>
                    <option value="tuscan" name="tuscan">Tuscan Village</option>
                    <option value="korean" name="korean">Korean Meatball</option>
                    <option value="roman" name="roman">Roman Ruins</option>
                </select>
            </div>
        );
    } else if (props.category == "soups") {
        return (
            <div className="mini-menu">
                <p>1 POT ...... $69.99</p>
                <h6>*Feeds 10</h6>
                <p>3 POTS ...... $189.99</p>
                <p>5 POTS ...... $279.99</p>
                
                <select id="s-soups" name="s-soups">
                    <option value="" disabled selected hidden>Soup Type</option>
                    <option value="wedding" name="wedding">Italian Wedding</option>
                    <option value="minestrone" name="minestrone">Minestrone</option>
                    <option value="seaweed" name="seaweed">Seaweed</option>
                    <option value="ribollita" name="ribollita">Ribollita</option>
                    <option value="fagioli" name="fagioli">Pasta e Fagioli</option>
                </select>
            </div>
        );
    } else if (props.category == "salads") {
        return (
            <div className="mini-menu">
                <p>1 TIN ...... $79.99</p>
                <h6>*Feeds 10</h6>
                <p>3 TINS ...... $209.99</p>
                <p>5 TINS ...... $319.99</p>
                
                <select id="s-salads" name="s-salads">
                    <option value="" disabled selected hidden>Salad Type</option>
                    <option value="caprese" name="caprese">Caprese</option>
                    <option value="artichokes" name="artichokes">Artichokes and Bottarga</option>
                    <option value="rice" name="rice">Rice Salad</option>
                </select>
            </div>
        );
    } else if (props.category == "desserts") {
        return (
            <div className="mini-menu">
                <p>CAKE OF CHOICE ...... $89.99</p>
                <p>TIRAMISU ...... $69.99</p>
                <p>GELATO ...... $99.99</p>
                <p>COOKIE PLATTER ...... $69.99</p>
            </div>
        );
    }
};

export default MiniMenu;