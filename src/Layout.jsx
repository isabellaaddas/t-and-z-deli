import Header from "./components/Header";
import Footer from "./components/Footer";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <Footer phone="(973) 207-3474" email="teezeedeli@company.com"/>
        </>
    )
};

export default Layout;