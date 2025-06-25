import React from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import DIYCard from '../cards/DIYCard'
import AlatCard from '../cards/AlatCard'
const WhyDIY = () => {


    const alati = [
        {
            naziv: "GRS Električna Četka",
            src: "/cetka PB.png",
            opis: "GRS Električna Četka je snažan i lagan električni uređaj za održavanje umjetne trave.",
        },

        {
            naziv: "Električni Čistač",
            src: "/cetka ps.jpg",
            opis: "Iako izgleda poput kosilice, Električni Čistač je multifunkcionalni stroj za metenje, čišćenje i četkanje umjetne trave",
        },
        {
            naziv: "Klinovi za travnjak",
            src: "/klinovi.jpg",
            opis: "Klinovi za umjetnu travu osiguravaju stabilnost i čvrstoću vaše trave. Lako se postavljaju čekićem kroz travu u podlogu",
        },
        {
            naziv: "Ljepilo u tubi „All Season“",
            src: "/ljepilo 1.jpg",
            opis: "Ljepilo za umjetnu travu je univerzalno i elastično, otporno na sve vremenske uvjete i UV zračenje. ",
        },
        {
            naziv: "Ljepilo u tubi 2k „All Season“",
            src: "/ljepilo 2k.png",
            opis: "Ljepilo za umjetnu travu je univerzalno i elastično, otporno na sve vremenske uvjete i UV zračenje. ",
        },
        {
            naziv: "Delphin Nož ",
            src: "/noz 2.jpg",
            opis: "„Delphin“ nož je lagan i jednostavan za rukovanje, idealan za profesionalce i hobiste koji postavljaju umjetnu travu.",
        },
        {
            naziv: "Spojna traka ",
            src: "/Traka.jpg",
            opis: "Spojna traka izuzetno je čvrsta i otporna na vlagu, širine 30 cm. ",
        },
    ]


    return (
        <div className="why-diy">
            <div className="section-title">
                <h2>Potrebni alati i pribor</h2>
                <h3>za postavljanje travnjaka</h3>
            </div>
            <div className="card-container">
                {
                    alati.map((a) => (
                        <AlatCard
                            key={a.naziv}
                            naziv={a.naziv}
                            src={a.src}
                            opis={a.opis}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default WhyDIY