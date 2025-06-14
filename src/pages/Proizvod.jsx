import ProizvodDIY from '../components/Proizvod/ProizvodDIY'
import ProizvodHero from '../components/Proizvod/ProizvodHero'
import ProizvodSpecs from '../components/Proizvod/ProizvodSpecs'
import ProizvodiSection from "../components/global/ProizvodiSection"
import Newsletter from "../components/global/Newsletter"
import '../css/proizvod.css'
const Proizvod = () => {



    return (
        <div className="proizvod-page">
            <ProizvodHero />
            < ProizvodSpecs />
            <ProizvodiSection proizvodPage={true} />
            <ProizvodDIY />
            <Newsletter />
        </div>
    )
}

export default Proizvod