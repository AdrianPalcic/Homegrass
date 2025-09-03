import useCMSStore from "../../store/useCMSStore";
import ButtonMain from "../buttons/ButtonMain";
import ProizvodCard from "../cards/ProizvodCard";

const Proizvodi = ({ proizvodPage, selectedProduct }) => {
  const proizvodi = useCMSStore((state) => state.proizvodi);

  const filteredProducts = proizvodi.filter(
    (p) => String(p.id) !== String(selectedProduct?.id)
  );

  const shortenText = (text, maxLength = 120) => {
    return text.length > maxLength
      ? text.slice(0, maxLength).trim() + "..."
      : text;
  };

  return (
    <div className="proizvodi-container">
      <div className="section-title">
        {!proizvodPage ? (
          <>
            <h2>Naši Proizvodi</h2>
            <h3>Umjetna trava</h3>
          </>
        ) : (
          <>
            <h2>Ostali proizvodi</h2>
            <h3>Slični modeli umjetne trave</h3>
          </>
        )}
      </div>
      <div className="proizvodi">
        {!proizvodPage ? (
          <>
            {proizvodi.map((p) => {
              const title = p.title?.rendered;
              const opis = p.acf?.opis || "";
              const slika =
                p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
              const alt =
                p._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                title ||
                "Homegrass proizvodi - vrhunska ponuda umjetne trave";

              return (
                <ProizvodCard
                  key={p.id}
                  slug={p.slug}
                  naziv={title}
                  opis={shortenText(opis)}
                  slika={slika}
                  alt={alt}
                />
              );
            })}
          </>
        ) : (
          <>
            {filteredProducts.map((p) => {
              const title = p.title?.rendered;
              const opis = p.acf?.opis || "";
              const slika =
                p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
              const alt =
                p._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
                title ||
                "Homegrass proizvodi - vrhunska ponuda umjetne trave";

              return (
                <ProizvodCard
                  key={p.id}
                  slug={p.slug}
                  naziv={title}
                  opis={shortenText(opis)}
                  slika={slika}
                  alt={alt}
                />
              );
            })}
          </>
        )}
      </div>
      <ButtonMain link={"kontakt"} text={"Zatražite besplatnu ponudu"} />
    </div>
  );
};

export default Proizvodi;
