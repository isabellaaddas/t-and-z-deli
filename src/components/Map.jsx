import compass from "./../images/compass-icon.png";
import "./../css/Map.css";

const Map = () => {
    return (
        <div id="map" className="one">
            <div id="map-header" className="special-columns">
                <h3 className="four">LOCATION</h3>
                <div className="three"><img id="compass-icon" src={compass}/></div>
            </div>

            <iframe id="deli-location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26463.1907719802!2d-81.05715532670376!3d33.995131872977616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f8a4d4c51e6555%3A0xb9b430a12be7bdce!2sEast%20Bay%20Deli%20-%20Columbia!5e0!3m2!1sen!2sus!4v1760622376444!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
};

export default Map;