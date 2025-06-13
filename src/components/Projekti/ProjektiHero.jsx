import React from 'react'
import ButtonMain from '../buttons/ButtonMain'

const ProjektiHero = () => {
    return (
        <div className="projekti-hero">
            <div className="projekti-hero-left">
                <h2>Homegrass projekti </h2>
                <h3>Upoznajte se s rezultatima našeg rada! Ovdje donosimo primjere uspješno postavljenih HomeGrass travnjaka, koji su klijentima donijeli dugotrajan, bezbrižan i lijep zeleni prostor.</h3>
                <ButtonMain text={"Zatraži Ponudu"} link={"kontakt"} />
            </div>
            <div className="projekti-hero-right">
                <div className="image">
                    <img src="/projekti-hero.jpg" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" />
                </div>
            </div>
        </div>
    )
}

export default ProjektiHero