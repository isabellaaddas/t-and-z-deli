import "./../css/MenuItemButtons.css";

const MenuItemButtons = () => {

    const handleClick = (event) => {
        event.preventDefault();
    }

    return (
        <div className="counter-buttons one" onClick={handleClick}>
            <button className="minus">-</button>
            <span className="counter">1</span>
            <button className="plus">+</button>
        </div>
    );
};

export default MenuItemButtons;