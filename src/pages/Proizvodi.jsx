import React from 'react'
import { Helmet } from 'react-helmet'
import "../css/Proizvodi.css"
import ProizvodiHero from '../components/proizvodi/ProizvodiHero'
import Kvalifikacije from '../components/global/Kvalifikacije'
import Newsletter from '../components/global/Newsletter'
import ProizvodiListing from '../components/proizvodi/ProizvodiListing'
import CTA from '../components/global/CTA'

const Proizvodi = () => {
    return (
        <>
            <Helmet>
                <title>Umjetna Trava HomeGrass – Proizvodi</title>
                <meta name="description" content="Otkrijte HomeGrass proizvode – umjetne trave vrhunske gustoće i izgleda, idealne za vaš vrt, terasu ili igralište." />
                <meta name="keywords" content="umjetna trava, HomeGrass, proizvodi, vrtna trava, terasa, igra, gustoća, kvaliteta" />
                <meta property="og:title" content="HomeGrass Proizvodi – Umjetna Trava" />
                <meta property="og:description" content="Pregledajte ponudu HomeGrass proizvoda i pronađite idealnu umjetnu travu za vaš prostor." />
                <meta property="og:image" content="/proizvodi-hero.webp" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://homegrass.hr/proizvodi" />
                <link rel="canonical" href="https://homegrass.hr/proizvodi" />
                <link rel="preload" as="image" href="/hero.webp" />
            </Helmet>

            <ProizvodiHero />
            <ProizvodiListing />
            <Kvalifikacije />
            <CTA />
            <Newsletter />
        </>
    )
}

export default Proizvodi
