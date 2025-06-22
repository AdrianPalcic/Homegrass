import React from 'react'
import { Helmet } from 'react-helmet'
import DIYHero from '../components/DIY/DIYHero'
import Newsletter from '../components/global/Newsletter'
import CTA from '../components/global/CTA'
import '../css/diy.css'
import WhyDIY from '../components/DIY/WhyDIY'
import Prednosti from '../components/DIY/Prednosti'
import Vodic from '../components/DIY/Vodic'

const DIY = () => {
    return (
        <>
            <Helmet>
                <title>DIY Vodič za Umjetnu Travu | HomeGrass</title>
                <meta name="description" content="Postavite umjetnu travu sami uz naš detaljan korak-po-korak vodič. HomeGrass vam donosi jednostavno i povoljno rješenje za vlastitu zelenu oazu." />
                <meta name="keywords" content="DIY umjetna trava, vodič za postavljanje trave, kako postaviti umjetnu travu, HomeGrass ugradnja" />
                <meta property="og:title" content="DIY Vodič za Umjetnu Travu | HomeGrass" />
                <meta property="og:description" content="Naučite kako postaviti umjetnu travu sami pomoću HomeGrass DIY vodiča – uštedite novac i ostvarite zelenu površinu iz snova." />
                <meta property="og:image" content="/DIY-hero.webp" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="https://tvojadomena.hr/vodic" />
                <link rel="canonical" href="https://tvojadomena.hr/vodic" /> */}
                <link rel="preload" as="image" href="/DIY-hero.webp" />
            </Helmet>

            <DIYHero />
            <Prednosti />
            <WhyDIY />
            <Vodic />
            <CTA />
            <Newsletter />
        </>
    )
}

export default DIY
