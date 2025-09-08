import React from "react";
import ButtonMain from "../buttons/ButtonMain";
import { Helmet } from "react-helmet";

const OnamaHero = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/onama-hero.webp" />
      </Helmet>

      <div className="onama-hero">
        <div className="onama-hero-left">
          <h2>O nama - Stručnjaci za umjetnu travu</h2>
          <h3>
            HomeGrass je stručni tim specijaliziran za umjetnu travu i umjetne
            travnjake. Naš cilj je učiniti da vaš dom, vrt, terasa ili balkon
            uvijek izgledaju savršeno zeleno. Kroz dugogodišnje iskustvo,
            korištenje kvalitetnih materijala i profesionalno postavljanje
            umjetne trave, pomažemo klijentima da dobiju dugotrajan, jednostavan
            i lijep travnjak – bez zalijevanja, košnje i kompromisa.
          </h3>
          <ButtonMain text={"Kontaktiraj nas"} link={"kontakt"} />
        </div>
        <div className="onama-hero-right">
          <div className="image">
            <img
              src="/onama-hero.webp"
              alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OnamaHero;
