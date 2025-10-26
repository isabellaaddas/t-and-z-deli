import "./../css/MenuItemButtons.css";

const MenuItemButtons = () => {
    return (
        <div className="counter-buttons one">
            <button className="minus">-</button>
            <span className="counter">1</span>
            <button className="plus">+</button>
        </div>
    );
};

export default MenuItemButtons;