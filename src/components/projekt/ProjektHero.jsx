import { ImagePlusIcon } from 'lucide-react'
import React, { useState } from 'react'

const ProjektHero = () => {






    return (
        <>


            <div className="projekt-hero">
                <div className="projekt-hero-left">
                    <h2>HomeGrass projekt – kvaliteta i prirodan izgled </h2>
                    <h3>Upoznajte se s rezultatima našeg rada! Ovdje donosimo primjere uspješno postavljenih HomeGrass travnjaka, koji su klijentima donijeli dugotrajan, bezbrižan i lijep zeleni prostor.</h3>
                    <div className="karakt">
                        <p><strong>Namjena: </strong>Privatni vrt</p>
                        <p><strong>Lokacija: </strong>Zagreb</p>
                        <p><strong>Korišteni proizvodi: </strong><a href='/proizvod/id'>Elegance</a></p>
                    </div>
                </div>
                <div className="projekt-hero-right">
                    <div className="image">
                        <img src="/projekt-hero.jpg" alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProjektHero