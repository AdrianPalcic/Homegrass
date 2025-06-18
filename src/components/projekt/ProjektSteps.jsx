import React from 'react'

const ProjektSteps = () => {

    const steps = [
        {
            step: "1",
            title: " Uklanjanje postojeće vegetacije i nivelacija terena",
            text: "Pažljivo smo uklonili staru travu i korov, a zatim izravnali teren kako bismo osigurali ravnu i stabilnu podlogu za novu umjetnu travu.",
            img: "/projekt1.jpg",
        },
        {
            step: "2",
            title: "Ugradnja drenažnog sloja za sprječavanje nakupljanja vode",
            text: "Postavljen je drenažni sloj koji omogućuje brzo otjecanje kišnice i sprječava stvaranje lokvi, čime se osigurava dugotrajna funkcionalnost površine.",
            img: "/projekt1.jpg",
        },
        {
            step: "3",
            title: "Postavljanje ELEGANCE umjetne trave s certificiranom sigurnošću",
            text: " Odabrana je ELEGANCE umjetna trava zbog svog prirodnog izgleda i sigurnosti za djecu i kućne ljubimce. Travnjak je pažljivo postavljen i precizno fiksiran.",
            img: "/projekt1.jpg",
        },
        {
            step: "4",
            title: "Brza montaža bez prašine i nepotrebne buke",
            text: " Cijeli proces ugradnje izveden je efikasno i tiho, bez stvaranja viška prašine ili ometanja svakodnevnog života obitelji.",
            img: "/projekt1.jpg",
        },
        {
            step: "5",
            title: "Završna kontrola i edukacija klijenta o održavanju",
            text: " Nakon završetka radova, detaljno smo provjerili kvalitetu izvedbe i klijentu dali jasne upute za jednostavno održavanje novog travnjaka",
            img: "/projekt1.jpg",
        },
    ]


    return (
        <div className="projekt-steps">
            {
                steps.map((s, idx) => (
                    <div key={idx} className={`step ${idx % 2 === 1 ? "alternate" : ""}`}>
                        <div className={`step-left ${idx % 2 === 1 ? "alternate" : ""}`}>
                            <div className={`step-number ${idx % 2 === 1 ? "alternate" : ""}`}>
                                <span>{s.step}</span>
                                <h3>Korak</h3>
                            </div>
                            <div className={`step-text ${idx % 2 === 1 ? "alternate" : ""}`}>
                                <h3 className={`"" ${idx % 2 === 1 ? "alternate" : ""}`}>{s.title}</h3>
                                <p className={`"" ${idx % 2 === 1 ? "alternate" : ""}`}>{s.text}</p>
                            </div>
                        </div>
                        <div className="step-right">
                            <div className="image">
                                <img src={s.img} alt="Homegrass proces pri postavljanju travnjaka" loading='lazy' />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProjektSteps