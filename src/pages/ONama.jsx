import React from 'react'
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