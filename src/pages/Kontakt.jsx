import { Helmet } from "react-helmet";
import Newsletter from "../components/global/Newsletter";
import KontaktForm from "../components/kontakt/KontaktForm";
import KontaktHero from "../components/kontakt/KontaktHero";
import "../css/kontakt.css";

const Kontakt = () => {
  return (
    <>
      <Helmet>
        <title>Kontaktirajte nas | HomeGrass</title>
        <meta
          name="description"
          content="Imate pitanja ili želite ponudu za umjetnu travu? Kontaktirajte nas putem obrasca – HomeGrass tim vam stoji na raspolaganju."
        />
        <meta
          name="keywords"
          content="kontakt, HomeGrass, umjetna trava kontakt, upit, ponuda, travnjak"
        />
        <meta property="og:title" content="Kontakt | HomeGrass" />
        <meta
          property="og:description"
          content="Kontaktirajte HomeGrass stručnjake za sve što vas zanima o umjetnoj travi i uslugama."
        />
        <meta property="og:image" content="/kontakt-hero.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://homegrass.hr/kontakt" />
        <link rel="canonical" href="https://homegrass.hr/kontakt" />
        <link rel="preload" as="image" href="/kontakt-hero.webp" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16942334557"
        ></script>
      </Helmet>

      <KontaktHero />
      <KontaktForm />
      <Newsletter />
    </>
  );
};

export default Kontakt;
