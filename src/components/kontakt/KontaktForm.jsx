import React, { useState } from 'react';
import "../../css/kontaktform.css"

import { Phone, Mail, Facebook, MapPin, User, MessageSquare, Building, Hash, Instagram, SquareMeter } from "../../utils/Icons"

const ContactForm = () => {
    const [formData, setFormData] = useState({
        ime: "",
        prezime: "",
        email: "",
        mobitel: "",
        grad: "",
        postanskiBroj: "",
        poruka: "",
        kolicina: "",
        acceptPrivacy: false,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setFormData((prev) => ({ ...prev, acceptPrivacy: e.target.checked }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Ovdje možeš dodati svoju logiku slanja forme
    };

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <div className="contact-grid">
                    {/* Contact Form */}
                    <div className="form-card">
                        <div className="card-header">
                            <h2 className="card-title">Ispunite obrazac</h2>
                            <p className="card-description">Pošaljite nam poruku i kontaktirat ćemo vas u najkraćem roku</p>
                        </div>
                        <div className="card-content">
                            <form onSubmit={handleSubmit} className="form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName" className="form-label">Ime *</label>
                                        <div className="input-wrapper">
                                            <User className="input-icon" />
                                            <input
                                                id="firstName"
                                                name="ime"
                                                type="text"
                                                placeholder="Vaše ime"
                                                value={formData.ime}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName" className="form-label">Prezime *</label>
                                        <div className="input-wrapper">
                                            <User className="input-icon" />
                                            <input
                                                id="lastName"
                                                name="prezime"
                                                type="text"
                                                placeholder="Vaše prezime"
                                                value={formData.prezime}
                                                onChange={handleInputChange}
                                                className="form-input"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <div className="input-wrapper">
                                        <Mail className="input-icon" />
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="vas@email.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="form-input"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone" className="form-label">Telefon</label>
                                    <div className="input-wrapper">
                                        <Phone className="input-icon" />
                                        <input
                                            id="phone"
                                            name="mobitel"
                                            type="tel"
                                            placeholder="+385 99 999 9999"
                                            value={formData.mobitel}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="kolicina" className="form-label">Količina (u m²)</label>
                                    <div className="input-wrapper">
                                        <SquareMeter className="input-icon" />
                                        <input
                                            id="kolicina"
                                            name="kolicina"
                                            type="number"
                                            placeholder="30 m²"
                                            min="1"
                                            value={formData.kolicina}
                                            onChange={handleInputChange}
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city" className="form-label">Grad</label>
                                        <div className="input-wrapper">
                                            <Building className="input-icon" />
                                            <input
                                                id="city"
                                                name="grad"
                                                type="text"
                                                placeholder="Zagreb"
                                                value={formData.grad}
                                                onChange={handleInputChange}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="postalCode" className="form-label">Poštanski broj</label>
                                        <div className="input-wrapper">
                                            <Hash className="input-icon" />
                                            <input
                                                id="postalCode"
                                                name="postanskiBroj"
                                                type="text"
                                                placeholder="10000"
                                                value={formData.postanskiBroj}
                                                onChange={handleInputChange}
                                                className="form-input"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">Vaša poruka *</label>
                                    <div className="input-wrapper">
                                        <MessageSquare className="textarea-icon" />
                                        <textarea
                                            id="message"
                                            name="poruka"
                                            placeholder="Opišite kako vam možemo pomoći..."
                                            value={formData.poruka}
                                            onChange={handleInputChange}
                                            className="form-textarea"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="checkbox-wrapper">
                                    <input
                                        id="privacy"
                                        type="checkbox"
                                        checked={formData.acceptPrivacy}
                                        onChange={handleCheckboxChange}
                                        className="form-checkbox"
                                        required
                                        name="acceptPrivacy"
                                    />
                                    <label htmlFor="privacy" className="checkbox-label">
                                        Prihvaćam{" "}
                                        <a href="/privacy" className="privacy-link">pravila privatnosti</a>{" "}
                                        i slažem se da se moji podaci koriste za obradu upita
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={!formData.acceptPrivacy}
                                >
                                    Pošaljite poruku
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="card-header">
                                <h2 className="card-title">Kontaktirajte nas direktno</h2>
                                <p className="card-description">Dostupni smo za sva vaša pitanja i potrebe</p>
                            </div>
                            <div className="card-content">
                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <div className="contact-icon"><Phone /></div>
                                    </div>
                                    <div className="contact-details">
                                        <h3 className="contact-title">Telefon</h3>
                                        <a href='tel:+385912686803' className="contact-value">+385 91 2686 803</a>
                                        <p className="contact-subtitle">Pon-Pet: 8:00 - 17:00</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <div className="contact-icon"><Mail /></div>
                                    </div>
                                    <div className="contact-details">
                                        <h3 className="contact-title">Email</h3>
                                        <a href="mailto:info@homegrass.hr" className="contact-value">info@homegrass.hr</a>
                                        <p className="contact-subtitle">Odgovaramo u najkraćem roku</p>
                                    </div>
                                </div>

                                <div className="contact-item">
                                    <div className="contact-icon-wrapper">
                                        <div className="contact-icon"><MapPin /></div>
                                    </div>
                                    <div className="contact-details">
                                        <h3 className="contact-title">Lokacija</h3>
                                        <a href='https://maps.app.goo.gl/BxhftaEgRvDtekNx8' target='_blank' className="contact-value">Jaruščica 5/A, Zagreb</a>
                                        <p className="contact-subtitle">Hrvatska</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="map-card">
                            <div className="card-header">
                                <h3 className="map-title">Pronađite nas na karti</h3>
                            </div>
                            <div className="card-content">
                                <div className="map-container">
                                    <iframe
                                        className="map-image"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.105117124561!2d15.939186576159377!3d45.76908357108056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d43b0d8643a9%3A0x24c50b3bfa8cff2!2zSmFydcWhxI1pY2EgNS9BLCAxMDAwMCwgWmFncmVi!5e0!3m2!1shr!2shr!4v1749850322370!5m2!1shr!2shr"
                                        width="600"
                                        height="450"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <p className="map-description">Kliknite na mapu za detaljne upute za dolazak</p>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="social-card">
                            <div className="card-header">
                                <h3 className="social-title">Pronađite nas na društvenim mrežama</h3>
                            </div>
                            <div className="card-content">
                                <div className="social-links">
                                    <a
                                        href="https://www.instagram.com/homegrass.hr/"
                                        className="social-link"
                                        aria-label="Instagram"
                                        target='_blank'
                                    >
                                        <Instagram />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/profile.php?id=61574146090430"
                                        className="social-link"
                                        aria-label="Facebook"
                                        target='_blank'
                                    >
                                        <Facebook />
                                    </a>
                                </div>
                                <p className="social-description">Pratite nas za najnovije vijesti i ažuriranja</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
