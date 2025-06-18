import React from 'react'
import { Helmet } from 'react-helmet'
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
            <Helmet>
                <title>HomeGrass - Umjetna trava za svaki dom</title>
                <meta name="description" content="HomeGrass nudi vrhunsku umjetnu travu za vrtove, terase i balkone. Bez zalijevanja, bez košnje – samo savršen travnjak kroz cijelu godinu." />
                <meta name="keywords" content="umjetna trava, HomeGrass, trava za vrt, terasa, travnjak, bez održavanja, zelene površine" />
                <meta property="og:title" content="HomeGrass - Umjetna trava koja traje" />
                <meta property="og:description" content="Savršen travnjak tijekom cijele godine. Upoznajte HomeGrass – lidera u umjetnoj travi u Hrvatskoj." />
                <meta property="og:image" content="/hero.jpg" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="https://tvojadomena.hr/" />
                <link rel="canonical" href="https://tvojadomena.hr/" /> */}
                <link rel="preload" as="image" href="/hero.jpg" />
            </Helmet>

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
