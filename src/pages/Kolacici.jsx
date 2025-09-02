import React from "react";
import { Helmet } from "react-helmet";
import "../css/kolacici.css";

const Kolacici = () => {
  return (
    <div className="cookie-policy-page">
      <Helmet>
        <title>
          Politika kolačića | HomeGrass - Upravljanje kolačićima za umjetne
          travnjake
        </title>
        <meta
          name="description"
          content="HomeGrass koristi kolačiće za poboljšanje iskustva kupnje umjetne trave. Saznajte kako upravljati postavkama kolačića za naš katalog travnjaka."
        />
        <meta
          name="keywords"
          content="politika kolačića, umjetna trava, HomeGrass, GDPR, postavke kolačića, umjetni travnjak"
        />
        <meta
          property="og:title"
          content="Politika kolačića | HomeGrass Umjetni Travnjaci"
        />
        <meta
          property="og:description"
          content="Kako HomeGrass koristi kolačiće za personalizaciju iskustva kupnje umjetne trave. Vaše mogućnosti upravljanja."
        />
        <meta property="og:url" content="https://homegrass.hr/kolacici" />
        <link rel="canonical" href="https://homegrass.hr/kolacici" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16942334557"
        ></script>
      </Helmet>

      <div className="container">
        <h1>Politika kolačića za kupce umjetne trave</h1>
        <p>
          Kao vodeći dobavljač <strong>umjetnih travnjaka</strong> u Hrvatskoj,
          HomeGrass koristi kolačiće kako bismo vam pružili najbolje iskustvo
          prilikom pregleda naših <strong>umjetnih trava</strong> i naručivanja
          usluga.
        </p>
        <p>
          Možete upravljati postavkama kolačića putem našeg bannera ili
          podešavanjem postavki u svom pregledniku.
        </p>
        <h2>Što su kolačići?</h2>
        <p>
          Kolačići su male datoteke koje pamte vaše postavke za{" "}
          <strong>katalog umjetne trave</strong>, kao što je zadnja pregledana
          vrsta <strong>travnjaka</strong> ili dimenzije vaše površine.
        </p>

        <h2>Kolačići koje koristimo za umjetne travnjake</h2>
        <ul>
          <li>
            <strong>Funkcionalni kolačići</strong> - Omogućuju:
            <ul>
              <li>
                Pamćenje postavki kataloga <strong>umjetne trave</strong>
              </li>
              <li>
                Spremanje proračuna za <strong>umjetni travnjak</strong>
              </li>
              <li>Rad kontakt obrasca za narudžbe</li>
            </ul>
          </li>
          <li>
            <strong>Analitički kolačići</strong> - Koristimo ih za:
            <ul>
              <li>
                Praćenje koje vrste <strong>umjetne trave</strong> najviše
                zanimaju posjetitelje
              </li>
              <li>Poboljšanje izgleda stranice s katalogom</li>
              <li>
                Mjerimo učinkovitost kampanja za{" "}
                <strong>umjetne travnjake</strong>
              </li>
            </ul>
            <p className="note">
              (Google Analytics implementacija aktivirat će se nakon vaše
              privole)
            </p>
          </li>
          <li>
            <strong>Marketinški kolačići</strong> - Koriste se za:
            <ul>
              <li>
                Prikaz relevantnih oglasa za <strong>umjetne travnjake</strong>
              </li>
              <li>
                Retargeting kampanje (ako ste pregledali određenu vrstu{" "}
                <strong>umjetne trave</strong>)
              </li>
            </ul>
          </li>
        </ul>

        <h2>Kontakt za pitanja o kolačićima</h2>
        <p>
          Za sva pitanja o kolačićima u vezi s kupnjom{" "}
          <strong>umjetne trave</strong>, kontaktirajte našeg službenika za
          zaštitu podataka:
        </p>
        <address>
          <p>
            {" "}
            <a href="mailto:info@homegrass.hr">info@homegrass.hr</a>
          </p>
          <p>
            {" "}
            <a href="tel:+385912686803">+385 91 2686 803</a>{" "}
          </p>
          <p>Radno vrijeme: pon-pet 9-15h</p>
        </address>

        <div className="company-details">
          <p>Artificial Grass Specialists d.o.o., Zagreb</p>
          <p>Upisan na Trgovačkom sudu u Zagrebu</p>
          <p>OIB: 16476619517</p>
          <p>temeljni kapital: 2.650,00EUR</p>
          <p>Direktor: Davor Novak</p>
        </div>
        <p>
          Za tehnička pitanja o <strong>umjetnim travnjacima</strong>, koristite
          redovne kontakte.
        </p>
      </div>
    </div>
  );
};

export default Kolacici;
