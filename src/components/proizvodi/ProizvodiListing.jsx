import React, { useState } from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import { SlidersHorizontal } from 'lucide-react'

const ProizvodiListing = () => {

    const [isModalOpen, setModalOpen] = useState(false)


    const dummyProizvodi = [
        {
            id: 1,
            naziv: "Elegance",
            opis: "Vrhunska gustoća i mekoća. Izvrstan odskok i vrlo visoka izdržljivost. Elegantna trava koja naglašava i podiže izgled prostora oko bazena i svakog kutka vašeg vrta.",
            slika: "/elegance.jpg",
            alt: "Homegrass Elegance umjetna trava",

        },
        {
            id: 2,
            naziv: "Glorious",
            opis: "Nova, inovativna i veličanstvena s visinom od 55 mm! Njena glavna karakteristika su mekana i elastična vlakna bez usmjerenja, koja ne idu u jednom smjeru, što rezultira potpuno prirodnim izgledom koji je teško razlikovati od prave trave. Nudi visoku gustoću i mekoću, izuzetnu izdržljivost, vrhunsku estetiku i ističe se kao najkvalitetniji proizvod HomeGrassa. Idealna je opcija za lijep, prirodan i luksuzan izgled svakog vrta.",
            slika: "/glorious.jpg",
            alt: "Homegrass Glorious umjetna trava",

        },
        {
            id: 3,
            naziv: "Optimal",
            opis: "Visokootporna umjetna trava, idealna za intenzivnu igru djece i kućnih ljubimaca. Izvrstan odabir za bilo koju primjenu.",
            slika: "/optimal.jpg",
            alt: "Homegrass Optimal umjetna trava",

        },
        {
            id: 4,
            naziv: "Premier",
            opis: "Premier umjetna trava je vrhunsko rješenje za prirodan mat efekt, s visinom vlakana od 40 mm, prekrasnim osjećajem pod nogama i zaista najboljim omjerom cijene i kvalitete koji možete pronaći na tržištu.",
            slika: "/permiere.jpg",
            alt: "Homegrass Premier umjetna trava",

        },
        {
            id: 5,
            naziv: "Smart",
            opis: "Umjetna trava s najboljim omjerom cijene i kvalitete na tržištu. Pametan odabir koji kombinira zadovoljavajuću gustoću i mekoću s visokom izdržljivošću. Idealna za primjenu u svakom vrtu i na balkonu, pogodna za djecu i kućne ljubimce, kao i za puno igre!",
            slika: "/smart.jpg",
            alt: "Homegrass Smart umjetna trava",

        },
    ]

    const shortenText = (text, maxLength = 120) => {
        return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
    };




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
                                    opis={shortenText(p.opis)}
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