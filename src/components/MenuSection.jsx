import "./../css/MenuSection.css";
import MenuItem from "./MenuItem";

const MenuSection = (props) => {
    return (
        <div id={props.ident} className="menu-section">
            <h1>{props.category}</h1>

            <MenuItem name="NAPLES STYLE" price="11.99" image="https://isabellaaddas.github.io/csce242/projects/json/images/neapolitan-style.jpg" description='A classic panuozzo ("pizza sandwich") full of the familiar flavors of prosciutto and parmesan.'/>
        </div>
    );
};

export default MenuSection;