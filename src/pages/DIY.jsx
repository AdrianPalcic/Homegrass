import React from 'react'
import DIYHero from '../components/DIY/DIYHero'
import Newsletter from '../components/global/Newsletter'

import '../css/diy.css'
import WhyDIY from '../components/DIY/WhyDIY'
import Prednosti from '../components/DIY/Prednosti'

const DIY = () => {
    return (
        <>
            <DIYHero />
            <Prednosti />
            <WhyDIY />
            <Newsletter />
        </>
    )
}

export default DIY