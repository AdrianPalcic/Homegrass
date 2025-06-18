import React, { useState } from 'react'
import ButtonMain from '../buttons/ButtonMain'

const ProizvodHero = () => {

    const [selectedImage, setSelectedImage] = useState("/elegance.jpg")

    const productImages = {
        "slika1": "/elegance2.jpg",
        "slika2": "/elegance3.jpg",
        "slika3": "/elegance4.jpg",
    }
    return (
        <div className="proizvod-hero">
            <div className="proizvod-hero-left">
                <h2>ELEGANCE - umjetna trava prirodnog izgleda </h2>
                <h3>Model ELEGANCE pruža savršenu kombinaciju estetike i izdržljivosti za vaš vrt, terasu ili dječje igralište. Ova trava je mekana na dodir, izuzetno otporna na vremenske uvjete i zadržava prirodno zelenu boju kroz cijelu godinu.</h3>
                <ButtonMain text={"Zatražite Ponudu"} link={"kontakt"} />
            </div>
            <div className="proizvod-hero-right">
                <div className="image">
                    <img src={"/elegance.jpg"} alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave - Elegance" />
                </div>
                <div className="images">
                    {
                        Object.keys(productImages).map((key, index) => (
                            <img key={index}
                                src={productImages[key]} alt='Homegrass Elegance umjetna trava' fetchPriority='high'
                            />
                        ))
                    }
                </div>
            </div>
        </div>)
}

export default ProizvodHero