import "./../css/Catering.css";
import CateringBlock from "./../components/CateringBlock";

const Catering = () => {
    return (
        <main id="catering">
            <div id="find-location">
                <h1>Find Catering Location</h1>

                <input id="cater-location" name="cater-location" type="search" placeholder="Enter location (address, zip code, etc.)"/>
            </div>
            
            <div id="catering-menu" className="columns">
                <CateringBlock ident="sandwiches" name="SANDWICHES" category="sandwiches"/>
        
                <CateringBlock ident="soups" name="SOUPS" category="soups"/>

                <CateringBlock ident="salads" name="SALADS" category="salads"/>

                <CateringBlock ident="desserts" name="DESSERTS" category="desserts"/>
            </div>
        
            <div id="submit-catering"><input type="submit" value="Submit Catering Order"/></div>
        </main>
    );
};

export default Catering;