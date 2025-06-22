import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import MySVG from '../../utils/MySVG';
import '../../css/sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <MySVG />
                    <button className="close-btn" onClick={onClose}>
                        <X size={32} />
                    </button>
                </div>

                <nav className="sidebar-links">
                    <Link to="/onama" onClick={onClose}>O nama</Link>
                    <Link to="/proizvodi" onClick={onClose}>Naši Proizvodi</Link>
                    <Link to="/projekti" onClick={onClose}>Naši Projekti</Link>
                    <Link to="/vodic" onClick={onClose}>DIY - vodič</Link>
                    <Link to="/kontakt" onClick={onClose}>Kontakt</Link>
                </nav>

                <div className="footer-social">
                    <h3>Društvene mreže</h3>
                    <div className="socials">
                        <Link to="https://www.instagram.com/homegrass.hr/">
                            <FaInstagram className="social-icon" size={30} />
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=61574146090430">
                            <FaFacebook className="social-icon" size={30} />
                        </Link>
                    </div>
                </div>
            </div>

            {isOpen && <div className="overlay" onClick={onClose}></div>}
        </>
    );
};

export default Sidebar;
