import "./../css/About.css";
import aboutPic1 from "./../images/about-us-1.jpg";
import aboutPic2 from "./../images/about-us-2.jpg";

const About = () => {
    return (
        <main id="about" className="columns">
            <div id="about-text" className="one">
                <h2>Our Origins</h2>

                <p>We, the founders of T & Z Deli, are Antonio and Marzia Nam, a married couple of 16 years. Our love of the Italian and Korean culture we were raised around in New Jersey inspired us to open a deli to bring our favorite flavors to others. While we may be one of many Italian delis in the area, we set ourselves apart with our creative fusion menu including Korean dishes and treats. Our menu is handpicked and curated based on childhood memories of family dinners and holidays. When we opened, we only had one farm supporting us and our only regulars were friends and family. The OG T & Z crew consists of those same people and are the reason we haven't lost our roots. The deli opened only a week after our wedding and still features leftover decorations to this day. The legacy of our family is immortalized by the deli and bleeds into every bite of our finest creations.</p>
            </div>

            <div id="about-imgs" className="one">
                <div><img src={aboutPic1}/></div>

                <div><img src={aboutPic2}/></div>
            </div>
        </main>
    );
};

export default About;