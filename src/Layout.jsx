import Header from "./components/Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header />

            <Outlet />

            <p>Footer</p>
        </>
    )
};

export default Layout;