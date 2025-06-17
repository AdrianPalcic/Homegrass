import React, { useState } from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import { SlidersHorizontal } from 'lucide-react'

const ProizvodiListing = () => {

    const [isModalOpen, setModalOpen] = useState(false)


    const dummyProizvodi = [
        {
            id: 1,
            naziv: "Elegance",
            opis: "Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...",
            slika: "/elegance.jpg",
            alt: "Homegrass Elegance umjetna trava",

        },
        {
            id: 2,
            naziv: "Glorious",
            opis: "Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...",
            slika: "/glorious.jpg",
            alt: "Homegrass Glorious umjetna trava",

        },
        {
            id: 3,
            naziv: "Optimal",
            opis: "Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...",
            slika: "/optimal.jpg",
            alt: "Homegrass Optimal umjetna trava",

        },
        {
            id: 4,
            naziv: "Premier",
            opis: "Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...",
            slika: "/permiere.jpg",
            alt: "Homegrass Premier umjetna trava",

        },
        {
            id: 5,
            naziv: "Smart",
            opis: "Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...",
            slika: "/smart.jpg",
            alt: "Homegrass Smart umjetna trava",

        },
    ]



    return (
        <>
            <div className="proizvodi-listing">
                <div className="proizvodi">
                    <div className="section-tt">
                        <h3>Ponuda umjetne trave</h3>
                        <SlidersHorizontal className='icon' onClick={() => setModalOpen(true)} />
                    </div>
                    <div className="proizvodi-container">
                        {
                            dummyProizvodi.map((p) => (
                                <ProizvodCard key={p.id}
                                    naziv={p.naziv}
                                    opis={p.opis}
                                    slika={p.slika}
                                    alt={p.alt}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProizvodiListing