import "./../css/Order.css";
import MenuSection from "./../components/MenuSection";

const Order = () => {
    return (
        <main id="order">
            <MenuSection ident="sandwiches" category="SANDWICHES"/>

            <MenuSection ident="soups" category="SOUPS"/>

            <MenuSection ident="cold-cuts" category="COLD CUTS"/>

            <MenuSection ident="jarred-goods" category="JARRED GOODS"/>

            <MenuSection ident="cheese" category="CHEESES"/>

            <MenuSection ident="extras" category="EXTRAS"/>

            <MenuSection ident="desserts" category="DESSERTS"/>
        </main>
    );
};

export default Order;