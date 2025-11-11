import { MdCreateNewFolder } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { IoStorefrontSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import React from 'react';

const Navbar = ({ onToggleTheme }) => {
    const navigate = useNavigate();

    const handleCreateNew = () => {
        navigate('/createnew');
    };

    return (
        <nav className="navbar navbar-expand-lg" style={{ background: 'var(--navbar-bg)', color: 'var(--navbar-text)', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <div className="container-fluid px-4 py-2 d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <IoStorefrontSharp size={28} style={{ marginRight: 8 }} />
                    <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}>Product Store</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <button className="btn btn-outline-primary d-flex align-items-center" title="Create New Product" onClick={handleCreateNew}>
                        <MdCreateNewFolder size={22} className="me-1" />
                        <span className="d-none d-md-inline">Create</span>
                    </button>
                    <button className="btn btn-outline-dark d-flex align-items-center" title="Toggle Dark Mode" onClick={onToggleTheme}>
                        <CgDarkMode size={22} className="me-1" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;