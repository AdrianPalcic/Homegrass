import ProizvodDIY from "../components/Proizvod/ProizvodDIY";
import ProizvodHero from "../components/Proizvod/ProizvodHero";
import ProizvodSpecs from "../components/Proizvod/ProizvodSpecs";
import ProizvodiSection from "../components/global/ProizvodiSection";
import Newsletter from "../components/global/Newsletter";
import "../css/proizvod.css";
import { useParams } from "react-router-dom";
import useCMSStore from "../store/useCMSStore";
import { Helmet } from "react-helmet";

const Proizvod = () => {
  const { id } = useParams();
  const proizvodi = useCMSStore((state) => state.proizvodi);
  const proizvod = proizvodi.find((p) => String(p.id) === id);

  if (!proizvod) {
    return <div className="loading">Ucitavanje...</div>;
  }

  const rawTitle = proizvod.title?.rendered || "";
  const title = rawTitle.replace(/<[^>]+>/g, ""); // Uklanja HTML tagove
  const featuredImage =
    proizvod._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";
  const opis = proizvod.acf?.opis || "";
  const alt =
    proizvod._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    title ||
    "Homegrass proizvodi - vrhunska ponuda umjetne trave";
  const karakteristike = proizvod.acf?.karakteristike || "";

  const karakteristikeArray = karakteristike.split(",").map((el) => {
    const [label, value] = el.split(":");
    return {
      label: label.trim(),
      value: value.trim(),
    };
  });

  const images = [
    proizvod.acf?.slika,
    proizvod.acf?.slika2,
    proizvod.acf?.slika3,
  ].filter((img) => img && img.url);

  return (
    <>
      <Helmet>
        <title>{`${title} | HomeGrass - Umjetna trava`}</title>
        <meta name="description" content={opis} />
        <meta
          name="keywords"
          content="umjetna trava, {title}, HomeGrass, umjetna trava za vrt, terasa, sportska podloga"
        />

        <meta property="og:title" content={`${title} | HomeGrass`} />
        <meta property="og:description" content={opis} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:type" content="product" />
        <meta property="og:site_name" content="HomeGrass" />

        <meta name="twitter:title" content={`${title} | HomeGrass`} />
        <meta name="twitter:description" content={opis} />
        <meta name="twitter:image" content={featuredImage} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preload" as="image" href={featuredImage} />
        <meta
          property="og:url"
          content={`https://homegrass.hr/proizvod/${id}`}
        />
        <link rel="canonical" href={`https://homegrass.hr/proizvod/${id}`} />
      </Helmet>

      <div className="proizvod-page">
        <ProizvodHero
          title={title}
          alt={alt}
          opis={opis}
          image={featuredImage}
          images={images}
        />
        <ProizvodSpecs karakteristike={karakteristikeArray} />
        <ProizvodiSection proizvodPage={true} selectedProduct={proizvod} />
        <ProizvodDIY />
        <Newsletter />
      </div>
    </>
  );
};

export default Proizvod;
