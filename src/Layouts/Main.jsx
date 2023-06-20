import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";
import { AiOutlineCopyright } from 'react-icons/ai';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <div className="flex justify-center flex-row my-7 items-center">
                <div className="mr-1">
                    <AiOutlineCopyright />
                </div>
                <p>All Copyright Reserved For Toy Mart</p>
            </div>
        </div>
    );
};

export default Main;