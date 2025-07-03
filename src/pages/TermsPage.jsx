import React from 'react';
import { Helmet } from 'react-helmet';
import '../css/terms.css';

const TermsPage = () => {
    return (
        <div className="terms-container">
            <Helmet>
                <title>Uvjeti poslovanja | HomeGrass - Vodeći dobavljač umjetne trave</title>
                <meta name="description" content="Uvjeti korištenja za HomeGrass, specijaliziranog za prodaju i instalaciju umjetnih travnjaka. Pročitajte pravila o intelektualnom vlasništvu i odricanju odgovornosti." />
                <meta name="keywords" content="uvjeti poslovanja, umjetna trava, HomeGrass, pravila kupnje, umjetni travnjak, garancija" />
                <meta property="og:title" content="Uvjeti poslovanja | HomeGrass Umjetni Travnjaci" />
                <meta property="og:description" content="Pravna pravila za kupnju i ugradnju umjetne trave od vodećeg dobavljača u Hrvatskoj." />
                <meta property="og:url" content="https://homegrass.hr/uvjeti" />
                <link rel="canonical" href="https://homegrass.hr/uvjeti" />
            </Helmet>

            <h1 className="terms-title">Uvjeti poslovanja za umjetne travnjake</h1>
            <p className="terms-date">Zadnje ažuriranje: 22. lipnja 2025.</p>

            <section>
                <h2>1. Općenito</h2>
                <p>
                    Korištenjem stranice <strong>HomeGrass</strong>, specijalizirane za <strong>umjetnu travu i travnjake</strong>, potvrđujete da ste pročitali i prihvaćate ove uvjete. Ako planirate kupnju <strong>umjetnog travnjaka</strong>, savjetujemo pažljivo čitanje.
                </p>
            </section>

            <section>
                <h2>2. Intelektualno vlasništvo</h2>
                <p>
                    Svi materijali o <strong>umjetnoj travi</strong> (tehničke specifikacije, fotografije travnjaka, dizajn) vlasništvo su HomeGrass d.o.o. Zabranjeno je komercijalno kopiranje sadržaja bez dozvole.
                </p>
            </section>

            <section>
                <h2>3. Naručivanje umjetne trave</h2>
                <ul>
                    <li>Ponude za <strong>umjetne travnjake</strong> vrijede 30 dana</li>
                    <li>Potvrda narudžbe obvezuje na kupnju</li>
                    <li>Promjene u ugradnji moguće uz doplatu</li>
                </ul>
            </section>

            <section>
                <h2>4. Garancija na umjetne travnjake</h2>
                <p>
                    HomeGrass jamči kvalitetu <strong>umjetne trave</strong> prema proizvođačevim specifikacijama. Garancija ne pokriva oštećenja nastala nepropisnom ugradnjom ili održavanjem.
                </p>
            </section>

            <section>
                <h2>5. Odricanje od odgovornosti</h2>
                <p>
                    Informacije o <strong>umjetnim travnjacima</strong> su informativne prirode. Preporučamo profesionalnu instalaciju za optimalne rezultate.
                </p>
            </section>

            <section>
                <h2>6. Rješavanje sporova</h2>
                <p>
                    Za sve sporove vezane uz kupnju <strong>umjetne trave</strong>, nadležan je sud u Zagrebu.
                </p>
            </section>

            <section>
                <h2>7. Kontakt za umjetne travnjake</h2>
                <p>Za pitanja o uvjetima za <strong>umjetnu travu</strong> kontaktirajte nas:</p>
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
                <p>Radno vrijeme za savjete o <strong>umjetnim travnjacima</strong>: Pon-Pet 8-16h</p>
            </section>
        </div>
    );
};

export default TermsPage;