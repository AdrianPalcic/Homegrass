import NaslovnaHero from '../components/Naslovna/NaslovnaHero'
import "../css/Naslovna.css"
import NaslovnaOnama from '../components/Naslovna/NaslovnaOnama'
import Proizvodi from '../components/global/ProizvodiSection'
import Projekti from '../components/global/ProjektiSection'
import NaslovnaReviews from '../components/Naslovna/NaslovnaReviews'
import NaslovnaDIY from '../components/Naslovna/NaslovnaDIY'
import CTA from '../components/global/CTA'
import Newsletter from '../components/global/Newsletter'
const Naslovna = () => {
    return (
        <>
            <NaslovnaHero />
            <NaslovnaOnama />
            <Proizvodi />
            <Projekti />
            <NaslovnaReviews />
            <NaslovnaDIY />
            <CTA />
            <Newsletter />
        </>
    )
}

export default Naslovna