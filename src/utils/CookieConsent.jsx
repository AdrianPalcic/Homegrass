import React, { useEffect, useState } from 'react';
import '../css/cookieconsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);

    // Ako koristiš GA u budućnosti, aktiviraj ovdje
    /*
    window.gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
    */
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setIsVisible(false);
    // Ako budeš koristio tag manager, blokiraj ovdje ostale skripte
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent-banner">
      <p>
        Koristimo kolačiće za pružanje boljeg korisničkog iskustva, analitiku i marketing.
        Možete odlučiti koje kolačiće želite omogućiti.
      </p>
      <div className="cookie-consent-buttons">
        <button onClick={handleAcceptAll}>Prihvaćam sve</button>
        <button onClick={handleRejectAll}>Prihvaćam samo nužne</button>
        <a href="/kolacici">Postavke</a>
      </div>
    </div>
  );
};

export default CookieConsent;
