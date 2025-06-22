import React from 'react'
import StatsSection from '../components/Projekti/StatsSection'
import ProjektiHero from '../components/Projekti/ProjektiHero'
import '../css/projekti.css'
import ProjektiSection from '../components/global/ProjektiSection'
import Proces from '../components/global/Proces'
import NaslovnaReviews from '../components/Naslovna/NaslovnaReviews'
import Newsletter from '../components/global/Newsletter'
import { Helmet } from 'react-helmet'

const Projekti = () => {

    const listing = true;

    return (
        <>
            <Helmet>
                <title>HomeGrass Projekti | Umjetna trava primjeri u stvarnom svijetu</title>
                <meta name="description" content="Pogledajte uspješne projekte HomeGrass umjetne trave u vrtovima, terasama i igralištima diljem Hrvatske. Inspirirajte se za svoj sljedeći projekt!" />
                <meta name="keywords" content="HomeGrass, umjetna trava, vrt, terasa, igralište, projekti, instalacija, inspiracija, krajobrazno uređenje" />
                <meta property="og:title" content="HomeGrass Projekti" />
                <meta property="og:description" content="Inspiracija iz stvarnog svijeta – pogledajte gdje je postavljena HomeGrass umjetna trava." />
                <meta property="og:image" content="/projekti-hero.webp" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="https://www.homegrass.hr/projekti" />
                <link rel="canonical" href="https://www.homegrass.hr/projekti" /> */}
                <link rel="preload" as="image" href="/projekti-hero.webp" />
            </Helmet>

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
