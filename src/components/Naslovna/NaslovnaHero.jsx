import React from 'react'
import ButtonSecondary from '../buttons/ButtonSecondary'
import ButtonMain from '../buttons/ButtonMain'
import { Helmet } from 'react-helmet'

const NaslovnaHero = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="preload"
                    as="image"
                    href="/hero.jpg"
                />
            </Helmet>
            <div className="naslovna-hero">
                <div className="overlay-image">
                    <img src="/hero.webp" alt="Homegrass umjetna trava - Pogledajte više o umjetnim travnjacima" fetchPriority='high' />
                </div>
                <div className="naslovna-hero-content">
                    <h1>Zelenilo koje traje. <span>Kvaliteta</span> kojoj vjerujete.</h1>
                    <h3>S HomeGrass travom zaboravite na zalijevanje i košnju – vaš dom uvijek izgleda savršeno, uz dugogodišnje jamstvo i stručnu podršku</h3>
                    <div className="buttons">
                        <ButtonMain text="Zatraži Ponudu" link="kontakt" />
                        <ButtonSecondary text="Saznajte Više" link="onama" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NaslovnaHero