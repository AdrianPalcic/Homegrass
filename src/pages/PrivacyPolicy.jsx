import React from 'react';
import '../css/terms.css';

const PrivacyPolicy = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Pravila privatnosti</h1>
            <p className="terms-date">Zadnje ažuriranje: 22. lipnja 2025.</p>

            <section>
                <h2>1. Uvod</h2>
                <p>
                    Vaša privatnost nam je važna. Ova pravila privatnosti opisuju koje podatke prikupljamo, kako ih koristimo i kako ih štitimo prilikom vašeg korištenja stranice homegrass.hr.
                </p>
            </section>

            <section>
                <h2>2. Koje podatke prikupljamo?</h2>
                <ul>
                    <li>Ime i prezime</li>
                    <li>Email adresa</li>
                    <li>Broj telefona</li>
                    <li>Grad i poštanski broj</li>
                    <li>Poruka koju pošaljete putem kontakt obrasca</li>
                </ul>
                <p>Podatke prikupljamo samo kada ih dobrovoljno unesete.</p>
            </section>

            <section>
                <h2>3. Kako koristimo vaše podatke?</h2>
                <p>Podatke koristimo isključivo za:</p>
                <ul>
                    <li>odgovor na vaš upit,</li>
                    <li>pružanje traženih informacija ili usluga,</li>
                    <li>poboljšanje korisničkog iskustva na stranici.</li>
                </ul>
            </section>

            <section>
                <h2>4. Kolačići i analitika</h2>
                <p>
                    Ova stranica koristi kolačiće za osnovne funkcije i praćenje posjećenosti putem Google Analyticsa. Korištenjem stranice pristajete na upotrebu kolačića u skladu s pravilima privatnosti.
                </p>
                {/* <p>Google Analytics kod će biti aktiviran po aktivaciji kolačića (komentiran dok ste u lokalnom razvoju).</p> */}
            </section>

            <section>
                <h2>5. Tko ima pristup vašim podacima?</h2>
                <p>
                    Vaše podatke ne prodajemo niti dijelimo s trećim stranama, osim ako je to zakonski propisano.
                </p>
            </section>

            <section>
                <h2>6. Koliko dugo čuvamo vaše podatke?</h2>
                <p>
                    Vaše podatke čuvamo samo onoliko koliko je potrebno za obradu vašeg zahtjeva, osim ako zakon ne propisuje drugačije.
                </p>
            </section>

            <section>
                <h2>7. Vaša prava</h2>
                <p>Kao korisnik imate pravo na:</p>
                <ul>
                    <li>zatražiti pristup svojim osobnim podacima,</li>
                    <li>zatražiti ispravak ili brisanje podataka,</li>
                    <li>povući privolu u bilo kojem trenutku.</li>
                </ul>
            </section>

            <section>
                <h2>8. Kontakt</h2>
                <p>Za bilo kakva pitanja vezana za zaštitu privatnosti, kontaktirajte nas:</p>
                <ul>
                    <li>📧 info@homegrass.hr</li>
                    <li>📍 Jaruščica 5/A, Zagreb</li>
                    <li>📞 +385 91 2686 803</li>
                </ul>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
