import React from 'react'

const AlatCard = ({ naziv, src }) => {
    return (
        <div className="alat-card">
            <div className="image">
                <img src={src} alt="Prikaz alata za samostalno postavljanje umjetne trave" />
            </div>
            <div className="opis">
                <h3>{naziv}</h3>
            </div>
        </div>
    )
}

export default AlatCard