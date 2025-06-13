import Newsletter from '../components/global/Newsletter'
import KontaktForm from '../components/kontakt/KontaktForm'
import KontaktHero from '../components/kontakt/KontaktHero'
import '../css/kontakt.css'

const Kontakt = () => {
    return (
        <>
            <KontaktHero />
            <KontaktForm />
            <Newsletter />
        </>
    )
}

export default Kontakt