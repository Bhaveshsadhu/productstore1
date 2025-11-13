import { RiProductHuntLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const [dark, setDark] = useState(false);
    const toggleTheme = () => {
        setDark(!dark);

        if (!dark) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    };
    return (
        <nav className="navbar mt-4 p-3 border rounded shadow ms-2 me-2">
            <div className="container-fluid">

                <div className="row w-100 align-items-center">

                    {/* Left Section */}
                    <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-start mb-2 mb-md-0">
                        <Link to='/'><span className="display-6 me-2"><RiProductHuntLine /></span></Link>
                        <span className="fw-bold fs-4">Product Store</span>
                    </div>

                    {/* Center Section */}
                    <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
                        <h5 className="m-0">Welcome to Product Store</h5>
                        <p className="m-0 small">Your one-stop shop for all your product needs!</p>
                    </div>

                    {/* Right Section */}
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">

                        <Link className="btn btn-outline-secondary me-2" to='/create'><span className="fs-3"><CiCirclePlus /></span></Link>
                        <button className="btn btn-outline-secondary" onClick={toggleTheme}>
                            {dark ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
