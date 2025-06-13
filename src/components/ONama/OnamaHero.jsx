import React from 'react'
import ButtonMain from '../buttons/ButtonMain'

const OnamaHero = () => {
    return (
        <div className="onama-hero">
            <div className="onama-hero-left">
                <h2>O nama - Stručnjaci za umjetnu travu</h2>
                <h3>HomeGrass je stručni tim posvećen tome da vaš dom, vrt ili terasa uvijek izgledaju savršeno zeleno. Kroz godine iskustva, kvalitetne materijale i profesionalan pristup pomažemo klijentima da ostvare svoje snove o jednostavnom, trajnom i lijepom zelenilu – bez kompromisa.</h3>
                <ButtonMain text={"Kontaktiraj nas"} link={"kontakt"} />
            </div>
            <div className="onama-hero-right">
                <div className="image">
                    <img src="/onama-hero.jpg" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" />
                </div>
            </div>
        </div>
    )
}

export default OnamaHero
