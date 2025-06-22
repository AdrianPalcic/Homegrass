import React, { useState } from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import { SlidersHorizontal } from 'lucide-react'
import useCMSStore from '../../store/useCMSStore'

const ProizvodiListing = () => {

    const [isModalOpen, setModalOpen] = useState(false)


    const proizvodi = useCMSStore((state) => state.proizvodi)

    const shortenText = (text, maxLength = 120) => {
        return text.length > maxLength ? text.slice(0, maxLength).trim() + "..." : text;
    };




    return (
        <>
            <div className="proizvodi-listing">
                <div className="proizvodi">
                    <div className="section-tt">
                        <h3>Ponuda umjetne trave</h3>
                    </div>
                    <div className="proizvodi-container">
                        {proizvodi.map((p) => {
                            const title = p.title?.rendered
                            const opis = p.acf?.opis || ""
                            const slika = p._embedded?.['wp:featuredmedia']?.[0]?.source_url || ""
                            const alt = p._embedded?.['wp:featuredmedia']?.[0]?.alt_text || title || "Homegrass proizvodi - vrhunska ponuda umjetne trave"

                            return (
                                <ProizvodCard
                                    key={p.id}
                                    id={p.id}
                                    naziv={title}
                                    opis={shortenText(opis)}
                                    slika={slika}
                                    alt={alt}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProizvodiListing