import { Quote } from 'lucide-react'
import React from 'react'

const Review = ({ recenzija, klijent, lokacija }) => {
    return (

        <div className="review-projekt">
            <div className="quotes">
                <Quote />
                <Quote />
            </div>
            <div className="text">
                <p>{recenzija}</p>
            </div>
            <div className="name">
                <h3> {klijent + ".,"} <span>{lokacija}</span></h3>
            </div>
        </div>

    )

}

export default Review