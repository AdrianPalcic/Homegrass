import { useParams } from 'react-router-dom'
import Newsletter from '../components/global/Newsletter'
import BeforeAndAfter from '../components/projekt/BeforeAndAfter'
import ProjektChallenges from '../components/projekt/ProjektChallenges'
import ProjektHero from '../components/projekt/ProjektHero'
import Review from '../components/projekt/Review'
import '../css/projekt.css'
import useCMSStore from '../store/useCMSStore'
import { Helmet } from 'react-helmet'
import Testimonial from '../components/Naslovna/Testimonial'

const Projekt = () => {

    const { id } = useParams();
    const projekti = useCMSStore((state) => state.projekti);
    const projekt = projekti.find(p => String(p.id) === id);


    const title = projekt?.title?.rendered;
    const slika = projekt?._embedded?.['wp:featuredmedia']?.[0]?.source_url || ""
    const opis = projekt?.acf?.opis || ""
    const namjena = projekt?.acf?.namjena || "";
    const lokacija = projekt?.acf?.lokacija || "";
    const proizvod = projekt?.acf?.proizvodi || "";

    const proizvodi = useCMSStore((state) => state.proizvodi);
    const koristeniProizvod = proizvodi.find(p => p.title.rendered === proizvod);

    const proizvodNaslov = koristeniProizvod?.title.rendered;
    const proizvodId = koristeniProizvod?.id;
    console.log(proizvodId)

    const zelja = projekt?.acf?.opis_zelje || "";
    const izazovi = projekt?.acf?.izazovi;
    const izazoviArray = izazovi?.split(',').map(el => el.trim()) || [];

    const rjesenje = projekt?.acf?.rjesenje || "";
    const rjesenja = projekt?.acf?.rjesenja || "";
    const rjesenjaArray = rjesenja?.split(",").map(el => el.trim()) || [];

    const poslije = projekt?.acf?.poslije.url;
    const prije = projekt?.acf?.prije.url;

    const review = projekt?.acf?.recenzija;
    const klijent = projekt?.acf?.ime_klijenta;

    console.log(review)

    const avatar = klijent?.split(" ")
        .map(word => word[0])
        .join("");

    const images = [
        projekt?.acf?.slika,
        projekt?.acf?.slika2,
        projekt?.acf?.slika3,
        projekt?.acf?.slika4,
        projekt?.acf?.slika5,
        projekt?.acf?.slika6,
    ].filter(img => img && img.url)


    return (
        <>
            <Helmet>
                <title>{`Homegrass | Projekt - ${title}`}</title>
                <meta name="description" content={`Pogledajte kako smo riješili izazove za klijenta u ${lokacija}. ${opis}`} />
                <meta name="keywords" content={`umjetna trava, projekt ${title}, HomeGrass, ${lokacija}, rješenje, umjetni travnjak, terasa, vrt`} />

                <meta property="og:title" content={`${title} | HomeGrass`} />
                <meta property="og:description" content={`Primjena HomeGrass trave u stvarnim uvjetima - ${opis}`} />
                <meta property="og:image" content={slika} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="HomeGrass" />

                <meta name="twitter:title" content={`${title} | HomeGrass`} />
                <meta name="twitter:description" content={`Rješenje za klijenta u ${lokacija} - ${opis}`} />
                <meta name="twitter:image" content={slika} />
                <meta name="twitter:card" content="summary_large_image" />

                <link rel="preload" as="image" href={slika} />

                {/* Canonical (ako znaš domenu) */}
                {/* <link rel="canonical" href={`https://homegrass.hr/projekt/${id}`} /> */}
            </Helmet>
            <ProjektHero title={title} opis={opis} slika={slika} namjena={namjena} lokacija={lokacija} proizvod={proizvodNaslov} proizvodId={proizvodId} images={images} />
            {/* <ProjektChallenges zelja={zelja} rjesenje={rjesenje} izazovi={izazoviArray} rjesenja={rjesenjaArray} /> */}
            {
                prije && poslije && (
                    <BeforeAndAfter prije={prije} poslije={poslije} />)
            }
            {
                review && (
                    <Testimonial text={review} name={klijent} location={lokacija} avatar={avatar} />
                )
            }
            <Newsletter />
        </>
    )
}

export default Projekt