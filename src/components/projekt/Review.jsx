import { Quote } from 'lucide-react'
import React from 'react'

const Review = () => {
    return (

        <div className="review">
            <div className="quotes">
                <Quote />
                <Quote />
            </div>
            <div className="text">
                <p>HomeGrass tim je premašio sva moja očekivanja! Od prvog kontakta do završetka projekta sve je prošlo glatko i profesionalno. Moj vrt sada izgleda bolje nego ikad, a održavanje je minimalno. Djeca i pas uživaju, a ja napokon imam više slobodnog vremena. Svima bih preporučila ovu uslugu!</p>
            </div>
            <div className="name">
                <h3>Martina P., <span>Zagreb</span></h3>
            </div>
        </div>

    )

}

export default Review