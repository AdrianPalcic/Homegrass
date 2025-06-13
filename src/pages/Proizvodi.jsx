import React from 'react'
import "../css/Proizvodi.css"
import ProizvodiHero from '../components/proizvodi/ProizvodiHero'
import Kvalifikacije from '../components/global/Kvalifikacije'
import Newsletter from '../components/global/Newsletter'

const Proizvodi = () => {
    return (
        <>
            <ProizvodiHero />
            <Kvalifikacije />
            <Newsletter />
        </>
    )
}

export default Proizvodi