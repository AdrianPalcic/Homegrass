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
                    href="/proizvodi-hero.webp"
                />
            </Helmet>

            <div className="proizvodi-hero">
                <div className="proizvodi-hero-left">
                    <h2>HomeGrass proizvodi – kvaliteta i prirodan izgled </h2>
                    <h3>HomeGrass nudi profesionalnu umjetnu travu za vrtove, terase i sportske površine. Odaberite idealan model i uživajte u savršenom zelenilu tijekom cijele godine.</h3>
                    <ButtonMain text={"Zatražite besplatnu ponudu"} link={"kontakt"} />
                </div>
                <div className="proizvodi-hero-right">
                    <div className="image">
                        <img src="/onama.webp" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProizvodiHero