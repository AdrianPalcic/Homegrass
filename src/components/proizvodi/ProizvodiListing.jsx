import React, { useState } from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import FormButton from '../buttons/FormButton'
import FormButtonSecondary from '../buttons/FormButtonSecondary'
import { SlidersHorizontal } from 'lucide-react'
import Modal from './Modal'

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
                <div className="filterbar">
                    <h3>Filtriraj Proizvode</h3>
                    <form>
                        <div className="leftoright">
                            <label for="debljina 32mm">
                                <input type='checkbox' name="debljina 32mm" />
                                Debljina 32mm <span>(2)</span>
                            </label>
                            <label for="debljina 42mm">
                                <input type='checkbox' name="debljina 42mm" />
                                Debljina 42mm <span>(3)</span>
                            </label>
                        </div>

                        <h4>Namjena</h4>
                        <div className="leftoright">
                            <label for="Vrt">
                                <input type='checkbox' name="Vrt" />
                                Vrt
                            </label>
                            <label for="Igralište">
                                <input type='checkbox' name="Igralište" />
                                Igralište
                            </label>
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                        </div>

                        <h4>Duljina vlasi</h4>
                        <div className="leftoright">
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                        </div>
                        <div className="buttons">
                            <FormButton text={"Primjeni"} />
                            <FormButtonSecondary text={"Resetiraj"} />
                        </div>
                    </form>
                </div>

            </div>

            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <div className="filterbar">
                    <h3>Filtriraj Proizvode</h3>
                    <form>
                        <div className="leftoright">
                            <label for="debljina 32mm">
                                <input type='checkbox' name="debljina 32mm" />
                                Debljina 32mm <span>(2)</span>
                            </label>
                            <label for="debljina 42mm">
                                <input type='checkbox' name="debljina 42mm" />
                                Debljina 42mm <span>(3)</span>
                            </label>
                        </div>

                        <h4>Namjena</h4>
                        <div className="leftoright">
                            <label for="Vrt">
                                <input type='checkbox' name="Vrt" />
                                Vrt
                            </label>
                            <label for="Igralište">
                                <input type='checkbox' name="Igralište" />
                                Igralište
                            </label>
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                        </div>

                        <h4>Duljina vlasi</h4>
                        <div className="leftoright">
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                            <label for="balkon">
                                <input type='checkbox' name="balkon" />
                                Balkon
                            </label>
                        </div>
                        <div className="buttons">
                            <FormButton text={"Primjeni"} />
                            <FormButtonSecondary text={"Resetiraj"} />
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    )
}

export default ProizvodiListing