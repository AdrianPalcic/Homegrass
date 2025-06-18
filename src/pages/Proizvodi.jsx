import React from 'react'
import "../css/Proizvodi.css"
import ProizvodiHero from '../components/proizvodi/ProizvodiHero'
import Kvalifikacije from '../components/global/Kvalifikacije'
import Newsletter from '../components/global/Newsletter'
import ProizvodiListing from '../components/proizvodi/ProizvodiListing'
import CTA from '../components/global/CTA'

const Proizvodi = () => {
    return (
        <>
            <ProizvodiHero />
            <ProizvodiListing />
            <Kvalifikacije />
            <CTA />
            <Newsletter />
        </>
    )
}

export default Proizvodi