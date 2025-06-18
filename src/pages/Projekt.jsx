import Newsletter from '../components/global/Newsletter'
import BeforeAndAfter from '../components/projekt/BeforeAndAfter'
import ProjektChallenges from '../components/projekt/ProjektChallenges'
import ProjektHero from '../components/projekt/ProjektHero'
import ProjektSteps from '../components/projekt/ProjektSteps'
import Review from '../components/projekt/Review'
import '../css/projekt.css'

const Projekt = () => {
    return (
        <>
            <ProjektHero />
            <ProjektChallenges />
            <ProjektSteps />
            <BeforeAndAfter />
            <Review />
            <Newsletter />
        </>
    )
}

export default Projekt