import React from 'react'
import ButtonSecondary from '../buttons/ButtonSecondary'
const NaslovnaDIY = () => {
    return (
        <div className="naslovna-diy">
            <div className="overlay-image-cta">
                <img src="/cta.jpg" alt="Homegrass vodič za postavljanje umjetne trave bez stručnjaka" />
            </div>
            <div className="naslovna-diy-content">
                <h2>Želite postaviti umjetnu travu bez stručnjaka?</h2>
                <h3>Saznajte kako uz HomeGrass DIY vodič sami možete jednostavno i brzo postaviti umjetnu travu u svom vrtu ili na terasi. Pripremili smo praktične upute i popis materijala kako bi vaša instalacija bila bezbrižna od početka do kraja.</h3>
                <ButtonSecondary link={"vodic"} text={"DIY - Vodič"} />
            </div>
        </div>
    )
}

export default NaslovnaDIY