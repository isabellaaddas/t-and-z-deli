import "./../css/Vendors.css";
import VendorSide from "./../components/VendorSide";
import vendorPic from "./../images/vendors.jpg";

const Vendors = () => {
    return (
        <main id="vendors" className="columns">
            <VendorSide side="left"/>

            <div id="vendor-img" className="one"><img src={vendorPic}/></div>

            <VendorSide side="right"/>
        </main>
    );
};

export default Vendors;