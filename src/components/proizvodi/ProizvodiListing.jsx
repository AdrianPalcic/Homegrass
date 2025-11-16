import React, { useState } from "react";
import ProizvodCard from "../cards/ProizvodCard";
import useCMSStore from "../../store/useCMSStore";

const ProizvodiListing = () => {
  const proizvodi = useCMSStore((state) => state.proizvodi);

  const shortenText = (text, maxLength = 120) => {
    return text.length > maxLength
      ? text.slice(0, maxLength).trim() + "..."
      : text;
  };

  return (
    <>
      <div className="proizvodi-listing">
        <div className="proizvodi">
          <div className="section-tt">
            <h3>Ponuda umjetne trave</h3>
          </div>
          <div className="proizvodi-container">
            {proizvodi.map((p) => {
              const title = p.title?.rendered;
              const opis = p.acf?.opis || "";
              const slika =
                p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
              const alt =
                p._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                title ||
                "Homegrass proizvodi - vrhunska ponuda umjetne trave";
              const hasDiscount = p.acf.popust === true;
              const postotak = hasDiscount ? p.acf.postotak : "";

              return (
                <ProizvodCard
                  key={p.id}
                  slug={p.slug}
                  naziv={title}
                  opis={shortenText(opis)}
                  slika={slika}
                  alt={alt}
                  hasDiscount={hasDiscount}
                  postotak={postotak}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProizvodiListing;
