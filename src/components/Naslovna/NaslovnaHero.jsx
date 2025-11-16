import React from "react";
import ButtonSecondary from "../buttons/ButtonSecondary";
import ButtonMain from "../buttons/ButtonMain";
import { Helmet } from "react-helmet";
import useCMSStore from "../../store/useCMSStore";
import { Link } from "react-router-dom";

const NaslovnaHero = () => {
  const proizvodi = useCMSStore((state) => state.proizvodi);
  const proizvod = proizvodi.find((p) => p.acf.popust === true);
  const rawTitle = proizvod ? proizvod.title?.rendered || "" : "";
  const title = proizvod ? rawTitle.replace(/<[^>]+>/g, "") : "";
  const postotak = proizvod ? proizvod.acf.postotak : "";
  return (
    <>
      <Helmet>
        <link rel="preload" as="image" href="/hero.jpg" />
      </Helmet>
      <div className="naslovna-hero">
        <div className="overlay-image">
          <img
            src="/newhero.webp"
            alt="Homegrass umjetna trava - Pogledajte više o umjetnim travnjacima"
            fetchPriority="high"
          />
        </div>
        <div className="naslovna-hero-content">
          <h1>
            Savršena <span>umjetna</span> trava za svaki dom.
          </h1>
          {proizvod && (
            <h2>
              Black Friday akcija:{" "}
              <Link className="hero-link" to={`/proizvod/${proizvod.slug}`}>
                {postotak}% Popusta na {title}
              </Link>
            </h2>
          )}
          <h3>
            S HomeGrass travom zaboravite na zalijevanje i košnju – vaš dom
            uvijek izgleda savršeno, uz dugogodišnje jamstvo i stručnu podršku
          </h3>
          <div className="buttons">
            <ButtonMain text="Zatraži Ponudu" link="kontakt" />
            <ButtonSecondary text="Saznajte Više" link="onama" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NaslovnaHero;
