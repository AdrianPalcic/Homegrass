import React from 'react'
import StatsSection from '../components/Projekti/StatsSection'
import ProjektiHero from '../components/Projekti/ProjektiHero'
import '../css/projekti.css'
import ProjektiSection from '../components/global/ProjektiSection'
import Proces from '../components/global/Proces'
import NaslovnaReviews from '../components/Naslovna/NaslovnaReviews'
import Newsletter from '../components/global/Newsletter'
const Projekti = () => {

    const listing = true;

    return (
        <>
            <ProjektiHero />
            <StatsSection />
            <ProjektiSection listing={listing} />
            <Proces />
            <NaslovnaReviews listing={listing} />
            <Newsletter />

        </>
    )
}

export default Projekti