import React from 'react';
import '../css/kolacici.css'
const Kolacici = () => {
    return (
        <div className="cookie-policy-page">
            <div className="container">
                <h1>Politika kolačića</h1>
                <p>Ova web stranica koristi kolačiće kako bi poboljšala vaše korisničko iskustvo, analizirala promet te omogućila osnovne funkcionalnosti stranice.</p>

                <h2>Što su kolačići?</h2>
                <p>Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj kada posjetite neku web stranicu. Omogućuju web stranici da prepozna vaš uređaj i zapamti vaše postavke ili aktivnosti.</p>

                <h2>Koje vrste kolačića koristimo?</h2>
                <ul>
                    <li><strong>Neophodni kolačići</strong> – Omogućuju osnovne funkcije web stranice kao što su navigacija i pristup zaštićenim područjima. Web stranica ne može ispravno funkcionirati bez ovih kolačića.</li>
                    <li><strong>Analitički kolačići</strong> – Koristimo ih za razumijevanje načina na koji korisnici koriste našu web stranicu (npr. putem Google Analytics-a). <em>(*Google Analytics implementacija je trenutno deaktivirana i aktivirat će se prilikom objave stranice*)</em></li>
                    <li><strong>Marketinški kolačići</strong> – Koriste se za praćenje korisnika preko web stranica kako bi se prikazali relevantni oglasi (npr. Facebook Pixel, ako se koristi).</li>
                </ul>

                <h2>Kako možete upravljati kolačićima?</h2>
                <p>Možete upravljati ili obrisati kolačiće putem postavki vašeg preglednika. Većina preglednika omogućuje pregled, brisanje i blokiranje kolačića. Imajte na umu da blokiranjem određenih kolačića web stranica možda neće raditi ispravno.</p>

                <p>Također, možete ažurirati svoje postavke putem našeg bannera za upravljanje kolačićima u podnožju stranice.</p>

                <h2>Kontakt</h2>
                <p>Ako imate pitanja o našoj politici kolačića, slobodno nas kontaktirajte na <a href="mailto:info@homegrass.hr">info@homegrass.hr</a>.</p>
            </div>
        </div>
    );
};

export default Kolacici;
