import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MySVG from '../../utils/MySVG';
import "../../css/navbar.css";
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';
const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <MySVG />
                </div>
                <nav className="nav-links">
                    <Link to="/onama">O nama</Link>
                    <Link to="/proizvodi">Naši Proizvodi</Link>
                    <Link to="/projekti">Naši Projekti</Link>
                    <Link to="/vodic">DIY - vodič</Link>
                    <Link className='last-child' to="/kontakt">Kontakt</Link>
                </nav>
                <div className="menu" onClick={() => setSidebarOpen(true)}>
                    <Menu />
                </div>
            </div>

            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    );
};

export default Navbar;
