import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Navbar from "../../sections/Navbar";
import Footer from "../../sections/Footer";

const Layout = () => {
    return (
        <div>
            <ToastContainer
                autoClose={2000}
                theme="light"
                transition={Slide}
                hideProgressBar={true}
            />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
