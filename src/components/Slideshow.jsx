import "./../css/Slideshow.css";
import {useState, useInterval} from "react";
import {Link} from "react-router-dom";

const Slideshow = () => {
    const[slideIndex, setSlideIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("./../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    );

    const slideForward = (event) => {
        event.preventDefault();
        setSlideIndex(slideIndex < images.length - 1 ? slideIndex + 1:0);
    };

    const slideBackward = (event) => {
        event.preventDefault();
        setSlideIndex(slideIndex > 0 ? slideIndex - 1:images.length - 1);
    };

    return (
        <div id="slideshow">
            <img src={images[slideIndex]}/>
            <a className="arrow" id="right-arrow" href="#" onClick={slideForward}>&gt;</a>
            <a className="arrow" id="left-arrow" href="#" onClick={slideBackward}>&lt;</a>
            <p id="btn-p"><Link className="link" to="/order"><button id="btn-order-now">Order Now</button></Link></p>
        </div>
    );
};

export default Slideshow;