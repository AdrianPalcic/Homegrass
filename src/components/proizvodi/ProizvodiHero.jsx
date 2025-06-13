import React from 'react'
import ButtonMain from '../buttons/ButtonMain'

const ProizvodiHero = () => {
    return (
        <div className="proizvodi-hero">
            <div className="proizvodi-hero-left">
                <h2>HomeGrass proizvodi – kvaliteta i prirodan izgled </h2>
                <h3>Upoznajte se s rezultatima našeg rada! Ovdje donosimo primjere uspješno postavljenih HomeGrass travnjaka, koji su klijentima donijeli dugotrajan, bezbrižan i lijep zeleni prostor.</h3>
                <ButtonMain text={"Saznajte više o proizvodima"} link={"kontakt"} />
            </div>
            <div className="proizvodi-hero-right">
                <div className="image">
                    <img src="/proizvodi-hero.jpg" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" />
                </div>
            </div>
        </div>
    )
}

export default ProizvodiHero