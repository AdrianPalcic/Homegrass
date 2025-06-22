import React from 'react'
import ButtonMain from '../buttons/ButtonMain'
import { Helmet } from 'react-helmet'

const ProjektiHero = () => {
    return (
        <>
            <Helmet>
                <link
                    rel="preload"
                    as="image"
                    href="/DIY-hero.jpg"
                />
            </Helmet>
            <div className="projekti-hero">
                <div className="projekti-hero-left">
                    <h2>Homegrass projekti </h2>
                    <h3>Upoznajte se s rezultatima našeg rada! Ovdje donosimo primjere uspješno postavljenih HomeGrass travnjaka, koji su klijentima donijeli dugotrajan, bezbrižan i lijep zeleni prostor.</h3>
                    <ButtonMain text={"Zatraži Ponudu"} link={"kontakt"} />
                </div>
                <div className="projekti-hero-right">
                    <div className="image">
                        <img src="/projekti-hero.webp" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjektiHero