
import ProizvodCard from '../cards/ProizvodCard'

const Proizvodi = ({ proizvodPage }) => {


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

        <div className="proizvodi-container">
            <div className='section-title'>
                {!proizvodPage ? (
                    <>
                        <h2>Naši Proizvodi</h2>
                        <h3>Umjetna trava</h3>
                    </>
                ) : (
                    <>
                        <h2>Ostali proizvodi</h2>
                        <h3>Slični modeli umjetne trave</h3>
                    </>
                )
                }
            </div>
            <div className="proizvodi">
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

    )
}

export default Proizvodi