import { Link } from "react-router-dom";
import navLogo from '../../../../public/logo.png'


const Navbar = () => {
    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alltoy">All Toy</Link></li>
        <li><Link to="/mytoy">My Toy</Link></li>
        <li><Link to="/addtoy">Add A Toy</Link></li>
        <li><Link to="/blogs">Blogs</Link></li>
    </>
    return (
        <div className="navbar bg-[#00b4d8] text-white sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu bg-[#00b4d8] menu-sm dropdown-content mt-3 p-2 shadow text-lg rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link to="/">
                    <img
                        className="w-[100px] h-[70px] ml-8"
                        src={navLogo}
                        alt=""
                    />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal text-lg px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <Link>
                    <button className="btn mr-8">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;