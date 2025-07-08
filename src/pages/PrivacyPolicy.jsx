import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/terms.css';

const PrivacyPolicy = () => {
    return (
        <div className="terms-container">
            <Helmet>
                <title>Politika privatnosti | HomeGrass - Sigurnost vaših podataka o umjetnoj travi</title>
                <meta name="description" content="Pravila privatnosti za HomeGrass, vodećeg dobavljača umjetnih travnjaka u Hrvatskoj. Kako štitimo vaše podatke pri kupnji umjetne trave." />
                <meta name="keywords" content="politika privatnosti, umjetna trava, HomeGrass, zaštita podataka, GDPR, umjetni travnjak" />
                <meta property="og:title" content="Politika privatnosti | HomeGrass Umjetni Travnjaci" />
                <meta property="og:description" content="Kako HomeGrass štiti vaše podatke pri narudžbi umjetne trave. Pročitajte našu politiku privatnosti." />
                <meta property="og:url" content="https://homegrass.hr/privacy/" />
                <link rel="canonical" href="https://homegrass.hr/privacy/" />
            </Helmet>

            <h1 className="terms-title">Politika privatnosti za kupce umjetne trave</h1>
            <p className="terms-date">Zadnje ažuriranje: 22. lipnja 2025.</p>

            <section>
                <h2>1. Uvod</h2>
                <p>
                    Kao vodeći dobavljač <strong>umjetnih travnjaka</strong> u Hrvatskoj, HomeGrass posvećuje posebnu pažnju zaštiti vaših osobnih podataka pri narudžbi <strong>umjetne trave</strong> i kontaktiranju putem naše stranice.
                </p>
            </section>

            <section>
                <h2>2. Koje podatke prikupljamo za umjetne travnjake?</h2>
                <ul>
                    <li>Ime i prezime (za ugovor o ugradnji)</li>
                    <li>Email adresa (za potvrdu narudžbe)</li>
                    <li>Broj telefona (za koordinaciju montaže)</li>
                    <li>Adresa (za izradu ponude za <strong>umjetni travnjak</strong>)</li>
                    <li>Dimenzije površine (za proračun količine <strong>umjetne trave</strong>)</li>
                </ul>
                <p>Svi podaci se prikupljaju samo kada naručujete <strong>umjetni travnjak</strong> ili tražite ponudu.</p>
            </section>

            <section>
                <h2>3. Kako koristimo podatke za umjetne travnjake?</h2>
                <p>Podatke koristimo isključivo za:</p>
                <ul>
                    <li>Izradu personalizirane ponude za <strong>umjetnu travu</strong></li>
                    <li>Organizaciju ugradnje <strong>travnjaka</strong></li>
                    <li>Slanje tehničkih savjeta za održavanje</li>
                </ul>
            </section>

            <section>
                <h2>4. Kolačići za umjetne travnjake</h2>
                <p>
                    Naša stranica koristi kolačiće za:
                </p>
                <ul>
                    <li>Pamćenje postavki kataloga <strong>umjetne trave</strong></li>
                    <li>Analitiku posjećenosti (Google Analytics)</li>
                    <li>Praćenje konverzija (prvenstveno za kontakt obrasc)</li>
                </ul>
                <p>Možete upravljati kolačićima u postavkama preglednika.</p>
            </section>

            <section>
                <h2>5. Sigurnost podataka o umjetnoj travi</h2>
                <p>
                    Svi podaci o narudžbama <strong>umjetnih travnjaka</strong> šifrirani su SSL certifikatom i pohranjeni u sigurnom okruženju.
                </p>
            </section>

            <section>
                <h2>6. Prava kupaca umjetne trave</h2>
                <p>Kao korisnik usluga HomeGrass imate pravo:</p>
                <ul>
                    <li>Zatražiti popis svih narudžbi <strong>umjetne trave</strong></li>
                    <li>Izbrisati podatke nakon završetka ugradnje</li>
                    <li>Dobiti kopiju ugovora o ugradnji <strong>travnjaka</strong></li>
                </ul>
            </section>

            <section>
                <h2>7. Kontakt za zaštitu privatnosti</h2>
                <p>Za pitanja o zaštiti podataka pri kupnji <strong>umjetne trave</strong>:</p>
                <ul className='list-element'>
                    <li> <a href="mailto:info@homegrass.hr">info@homegrass.hr</a></li>
                    <li> Jaruščica 5/A, Zagreb</li>
                    <li> <a href="tel:+385912686803">+385 91 2686 803</a></li>
                </ul>

                <div className="company-details">
                    <p>Artificial Grass Specialists d.o.o., Zagreb</p>
                    <p>Upisan na Trgovačkom sudu u Zagrebu</p>
                    <p>OIB: 16476619517</p>
                    <p>temeljni kapital: 2.650,00EUR</p>
                    <p>Direktor: Davor Novak</p>
                </div>
                <p>Odjel za zaštitu podataka radi radnim danima 8-16h.</p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;