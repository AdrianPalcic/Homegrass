import React from 'react'
import MySVG from '../../utils/MySVG'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div className='logo-footer-container'>
                <div className="logo logo-footer">
                    <MySVG />
                    <h3>Umjetna trava vrhunske kvalitete za vaš dom, vrt ili balkon.</h3>
                </div>
            </div>

            <div className='footer-links'>
                <h3>Navigacija</h3>
                <Link to="/onama">O Nama</Link>
                <Link to="/proizvodi">Proizvodi</Link>
                <Link to="/projekti">Projekti</Link>
                <Link to="/vodic">DIY - Vodič</Link>
                <Link to="/kontakt">Kontakt</Link>
            </div>
            <div className='footer-links'>
                <h3>Korisno</h3>
                <Link to="/kolacici">Kolačići</Link>
                <Link to="/uvjeti">Uvjeti Korištenja</Link>
                <Link to="/privacy">Pravila Privatnosti</Link>
            </div>

            <div className='footer-social'>
                <h3>Društvene mreže</h3>
                <div className="socials">
                    <Link to="https://www.instagram.com/homegrass.hr/">
                        <FaInstagram className='social-icon' size={40} color='white' />
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=61574146090430">
                        <FaFacebook className='social-icon' size={40} color='white' />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer