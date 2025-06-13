import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ProizvodCard = ({ naziv, opis, slika, id, alt }) => {
    return (
        <div className="proizvodi-card">
            <div className="image">
                <img src={slika} alt={alt} loading='lazy' />
            </div>
            <h3>{naziv}</h3>
            <p>{opis}</p>
            <Link to={`/proizvod/${id}`}>Detalji proizvoda <ChevronRight size={20} /></Link>
        </div>
    )
}

export default ProizvodCard