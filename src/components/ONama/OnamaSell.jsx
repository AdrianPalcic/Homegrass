import React from 'react'
import ButtonMain from '../buttons/ButtonMain'

const OnamaSell = () => {
    return (
        <div className="onama-sell">
            <div className="overlay-image-onama">
                <img src="/hero.webp" alt="Homegrass - dom najboljih umjetnih travnjaka" />
            </div>
            <div className="onama-sell-content">
                <h2>Naš cilj je više od lijepog travnjaka – želimo vam dati <span>bezbrižnost</span>, <span>slobodno vrijeme</span> i prostor za <span>uživanje</span>.</h2>
                <h3>Stručnost, kvaliteta i osobni pristup – zato nas birate.</h3>
                <ButtonMain text="Pogledajte naše proizvode" link="proizvodi" />
            </div>
        </div>

    )
}

export default OnamaSell