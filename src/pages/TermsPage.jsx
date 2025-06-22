import React from 'react';
import '../css/terms.css';

const TermsPage = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">Uvjeti korištenja</h1>
            <p className="terms-date">Zadnje ažuriranje: 22. lipnja 2025.</p>

            <section>
                <h2>1. Općenito</h2>
                <p>
                    Korištenjem stranice potvrđujete da ste pročitali, razumjeli i prihvaćate ove uvjete korištenja. Ako se ne slažete s njima, molimo vas da ne koristite ovu stranicu.
                </p>
            </section>

            <section>
                <h2>2. Intelektualno vlasništvo</h2>
                <p>
                    Sadržaj (tekst, slike, dizajn, logotip) vlasništvo je Homegrass d.o.o. ili se koristi uz dozvolu. Zabranjeno je kopiranje ili korištenje bez suglasnosti.
                </p>
            </section>

            <section>
                <h2>3. Dozvoljeno korištenje</h2>
                <ul>
                    <li>Pregledavanje sadržaja stranice</li>
                    <li>Korištenje kontakt obrasca</li>
                    <li>Dijeljenje uz navođenje izvora</li>
                </ul>
                <p>Zabranjeno je automatizirano prikupljanje podataka ili zloupotreba stranice.</p>
            </section>

            <section>
                <h2>4. Odricanje od odgovornosti</h2>
                <p>
                    Informacije su informativnog karaktera. Ne jamčimo potpunu točnost i ne odgovaramo za štetu nastalu korištenjem sadržaja.
                </p>
            </section>

            <section>
                <h2>5. Vanjske poveznice</h2>
                <p>
                    Stranica može sadržavati poveznice na druge web stranice. Nismo odgovorni za njihov sadržaj ni prakse privatnosti.
                </p>
            </section>

            <section>
                <h2>6. Promjene uvjeta</h2>
                <p>
                    Zadržavamo pravo izmjene uvjeta korištenja u bilo kojem trenutku. Savjetujemo da ih povremeno provjerite.
                </p>
            </section>

            <section>
                <h2>7. Primjenjivo pravo</h2>
                <p>
                    Na uvjete se primjenjuje pravo Republike Hrvatske. Nadležan je sud u Zagrebu.
                </p>
            </section>

            <section>
                <h2>8. Kontakt</h2>
                <p>Za sva pitanja kontaktirajte nas na:</p>
                <ul>
                    <li>📧 info@homegrass.hr</li>
                    <li>📍 Jaruščica 5/A, Zagreb</li>
                    <li>📞 +385 91 2686 803</li>
                </ul>
            </section>
        </div>
    );
};

export default TermsPage;
