import React, { useEffect, useState } from 'react';
import '../css/cookieconsent.css'
const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);

        // Google Analytics inicijalizacija (komentirano dok ne ideš online)
        /*
        window.gtag('consent', 'update', {
          ad_storage: 'granted',
          analytics_storage: 'granted',
        });
        */
    };

    if (!isVisible) return null;

    return (
        <div className="cookie-consent-banner">
            <p>
                Ova stranica koristi kolačiće za pružanje boljeg korisničkog iskustva. Nastavkom korištenja stranice prihvaćate upotrebu kolačića.
            </p>
            <button onClick={handleAccept}>
                Prihvaćam
            </button>
        </div>
    );
};

export default CookieConsent;
