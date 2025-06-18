import Newsletter from '../components/global/Newsletter'
import BeforeAndAfter from '../components/projekt/BeforeAndAfter'
import ProjektChallenges from '../components/projekt/ProjektChallenges'
import ProjektHero from '../components/projekt/ProjektHero'
import ProjektSteps from '../components/projekt/ProjektSteps'
import '../css/projekt.css'

const Projekt = () => {
    return (
        <>
            <ProjektHero />
            <ProjektChallenges />
            <ProjektSteps />
            <BeforeAndAfter />
            <Newsletter />
        </>
    )
}

export default Projekt