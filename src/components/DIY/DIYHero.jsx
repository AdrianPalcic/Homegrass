import React from 'react'
import SectionButton from '../buttons/SectionButton'
const DIYHero = () => {
    return (
        <div className="DIY-hero">
            <div className="DIY-hero-left">
                <h2>Samostalna ugradnja umjetne trave – DIY vodič </h2>
                <h3>Saznajte kako u nekoliko jednostavnih koraka možete sami postaviti umjetnu travu i pretvoriti svoj prostor u zelenu oazu, brzo i povoljno.</h3>
                <SectionButton text={"Prikaži korake postavljanja"} link={"vodic"} />
            </div>
            <div className="DIY-hero-right">
                <div className="image">
                    <img src="/DIY-hero.png" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" loading='eager' />
                </div>
            </div>
        </div>
    )
}

export default DIYHero