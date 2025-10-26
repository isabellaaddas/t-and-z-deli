import Oval from "./Oval";
import MiniMenu from "./MiniMenu";

const CateringBlock = (props) => {
    return (
        <div id={props.ident} className="one">
            <Oval name={props.name}/>

            <MiniMenu category={props.category}/>
        </div>
    );
};

export default CateringBlock;