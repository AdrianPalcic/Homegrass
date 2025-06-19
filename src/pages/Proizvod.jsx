import ProizvodDIY from '../components/Proizvod/ProizvodDIY'
import ProizvodHero from '../components/Proizvod/ProizvodHero'
import ProizvodSpecs from '../components/Proizvod/ProizvodSpecs'
import ProizvodiSection from "../components/global/ProizvodiSection"
import Newsletter from "../components/global/Newsletter"
import '../css/proizvod.css'
import { useParams } from 'react-router-dom'
import useCMSStore from '../store/useCMSStore'

const Proizvod = () => {
    const { id } = useParams();
    const proizvodi = useCMSStore((state) => state.proizvodi);
    const proizvod = proizvodi.find(p => String(p.id) === id);

    if (!proizvod) {
        return (
            <div className="loading">
                Ucitavanje...
            </div>
        );
    }

    const title = proizvod.title?.rendered;
    const featuredImage = proizvod._embedded?.['wp:featuredmedia']?.[0]?.source_url || ""
    const opis = proizvod.acf?.opis || ""
    const alt = proizvod._embedded?.['wp:featuredmedia']?.[0]?.alt_text || title || "Homegrass proizvodi - vrhunska ponuda umjetne trave"
    const karakteristike = proizvod.acf?.karakteristike || ""
    const images = [
        proizvod.acf?.slika,
        proizvod.acf?.slika2,
        proizvod.acf?.slika3
    ].filter(img => img && img.url)


    return (
        <div className="proizvod-page">
            <ProizvodHero title={title} alt={alt} opis={opis} image={featuredImage} images={images} />
            <ProizvodSpecs karakteristike={karakteristike} />
            <ProizvodiSection proizvodPage={true} />
            <ProizvodDIY />
            <Newsletter />
        </div>
    )
}

export default Proizvod