import React from 'react'
import SectionButton from '../buttons/SectionButton'
import { Helmet } from 'react-helmet'
const DIYHero = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="preload"
                    as="image"
                    href="/DIY-hero.webp"
                />
            </Helmet>

            <div className="DIY-hero">
                <div className="DIY-hero-left">
                    <h2>Samostalna ugradnja umjetne trave – DIY vodič </h2>
                    <h3>Saznajte kako u nekoliko jednostavnih koraka možete sami postaviti umjetnu travu i pretvoriti svoj prostor u zelenu oazu, brzo i povoljno.</h3>
                    <SectionButton text={"Prikaži korake postavljanja"} link={"vodic"} />
                </div>
                <div className="DIY-hero-right">
                    <div className="image">
                        <img src="/DIY-hero.webp" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default DIYHero