import React from 'react'
import { Helmet } from 'react-helmet'
import OnamaHero from '../components/ONama/OnamaHero'
import "../css/onama.css"
import OnamaSell from '../components/ONama/OnamaSell'
import Proces from '../components/global/Proces'
import Projekti from '../components/global/ProjektiSection'
import Proizvodi from '../components/global/ProizvodiSection'
import CTA from '../components/global/CTA'
import Newsletter from '../components/global/Newsletter'

const ONama = () => {
    return (
        <>
            <Helmet>
                <title>O nama - HomeGrass umjetna trava</title>
                <meta name="description" content="Upoznajte HomeGrass – tim stručnjaka za postavljanje umjetne trave. Otkrijte tko smo, našu viziju i zašto nas klijenti biraju!" />
                <meta name="keywords" content="HomeGrass, o nama, umjetna trava, stručnjaci, iskustvo, zelene površine, vrt, terasa" />
                <meta property="og:title" content="HomeGrass - O nama" />
                <meta property="og:description" content="Saznajte tko stoji iza HomeGrass brenda. Naš tim, misija i predanost pružanju vrhunskih rješenja za zelene površine." />
                <meta property="og:image" content="/onama-hero.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://homegrass.hr/onama/" />
                <link rel="canonical" href="https://homegrass.hr/onama/" />
                <link rel="preload" as="image" href="/onama-hero.webp" />
            </Helmet>

            <OnamaHero />
            <OnamaSell />
            <Proces />
            <Projekti />
            <Proizvodi />
            <CTA />
            <Newsletter />
        </>
    )
}

export default ONama
