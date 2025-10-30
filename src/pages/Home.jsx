import "./../css/Home.css";
import Map from "./../components/Map";
import StoreHours from "./../components/StoreHours";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <main id="home">
            <div id="home-header">
                <h1>T & Z Deli</h1>
            </div>

            <div id="home-cols" className="columns">
                <Map />

                <div id="home-text" className="one">
                    <p id="home-p">T & Z Deli is proudly the first-of-its-kind Italian-Korean fusion deli in New Jersey, unique both in cuisine and atmosphere. Run by a husband and wife duo, T & Z Deli combines cultural food and values in a bold mix that customers will never forget. From porchetta and gelato to kimchi and seaweed soup, there's a little bit of everything for all palates. Browse the creative menu and see why T & Z Deli has been a success for over 15 years.</p>
                    <p id="btn-p"><Link className="link" to="/order"><button id="btn-order-now">Order Now</button></Link></p>
                </div>

                <StoreHours />
            </div>
        </main>
    );
};

export default Home;