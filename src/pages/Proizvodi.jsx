import React from 'react'
import "../css/Proizvodi.css"
import ProizvodiHero from '../components/proizvodi/ProizvodiHero'
import Kvalifikacije from '../components/global/Kvalifikacije'
import Newsletter from '../components/global/Newsletter'
import ProizvodiListing from '../components/proizvodi/ProizvodiListing'

const Proizvodi = () => {
    return (
        <>
            <ProizvodiHero />
            <Kvalifikacije />
            <ProizvodiListing />
            <Newsletter />
        </>
    )
}

export default Proizvodi