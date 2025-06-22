import { useParams } from 'react-router-dom'
import Newsletter from '../components/global/Newsletter'
import BeforeAndAfter from '../components/projekt/BeforeAndAfter'
import ProjektChallenges from '../components/projekt/ProjektChallenges'
import ProjektHero from '../components/projekt/ProjektHero'
import Review from '../components/projekt/Review'
import '../css/projekt.css'
import useCMSStore from '../store/useCMSStore'

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

    return (
        <>
            <ProjektHero title={title} opis={opis} slika={slika} namjena={namjena} lokacija={lokacija} proizvod={proizvodNaslov} proizvodId={proizvodId} />
            <ProjektChallenges zelja={zelja} rjesenje={rjesenje} izazovi={izazoviArray} rjesenja={rjesenjaArray} />
            <BeforeAndAfter poslije={poslije} prije={prije} />
            <Review recenzija={review} klijent={klijent} />
            <Newsletter />
        </>
    )
}

export default Projekt