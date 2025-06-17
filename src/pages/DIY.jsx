import React from 'react'
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