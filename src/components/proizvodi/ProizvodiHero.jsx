import React from 'react'
import ButtonMain from '../buttons/ButtonMain'
import { Helmet } from 'react-helmet'

const ProizvodiHero = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="preload"
                    as="image"
                    href="/proizvodi-hero.jpg"
                />
            </Helmet>

            <div className="proizvodi-hero">
                <div className="proizvodi-hero-left">
                    <h2>HomeGrass proizvodi – kvaliteta i prirodan izgled </h2>
                    <h3>Upoznajte se s rezultatima našeg rada! Ovdje donosimo primjere uspješno postavljenih HomeGrass travnjaka, koji su klijentima donijeli dugotrajan, bezbrižan i lijep zeleni prostor.</h3>
                    <ButtonMain text={"Saznajte više o proizvodima"} link={"kontakt"} />
                </div>
                <div className="proizvodi-hero-right">
                    <div className="image">
                        <img src="/proizvodi-hero.jpg" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProizvodiHero