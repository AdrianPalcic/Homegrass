import { ImagePlusIcon } from 'lucide-react'
import React, { useState } from 'react'

const ProjektHero = () => {

    const [selectedImage, setSelectedImage] = useState("/projekt-hero.jpg")


    const images = {
        "slika1": "/newsletter.jpg",
        "slika2": "/projekt-hero.jpg",
        "slika3": "/projekt1.jpg",
        "slika4": "/prozivod-diy-hero.jpg",
        "slika5": "/onama-hero.jpg",
    }



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
                        <img src={selectedImage} alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>

            <div className="projekt-gallery">
                {
                    Object.keys(images).map((key, index) => (
                        <img key={index} src={images[key]} alt='Homegrass projekti - pogledajte kako smo prijašnje klijente ostavili zadovoljni' onClick={() => setSelectedImage(images[key])} />
                    ))
                }
            </div>
        </>
    )
}

export default ProjektHero