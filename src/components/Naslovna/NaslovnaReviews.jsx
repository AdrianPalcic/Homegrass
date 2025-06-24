import React from 'react'
import Testimonial from './Testimonial'

const NaslovnaReviews = ({ listing }) => {

    const data = [
        {
            text: "Nakon godina borbe s održavanjem travnjaka, odlučili smo ugraditi HomeGrass umjetnu travu i nismo požalili ni sekunde. Izgleda nevjerojatno prirodno, a vrt nam konačno izgleda uredno kroz cijelu godinu. Postavljanje je bilo brzo i profesionalno. Preporučujem svima!",
            name: "Marija K.",
            location: "Zagreb",
            avatar: "MK"
        },
        {
            text: "HomeGrass je promijenio naš pogled na vrtove. Umjetna trava izgleda tako prirodno da gosti često ne primijete razliku. Održavanje je minimalno, a uživamo u zelenilu tijekom cijele godine.",
            name: "Ivan P.",
            location: "Split",
            avatar: "IP"
        },
        {
            text: "Kvaliteta trave je izvrsna! Instalacija je bila brza, a tim vrlo profesionalan. Sada imamo savršeno uređen vrt bez brige o održavanju.",
            name: "Ana M.",
            location: "Zagreb",
            avatar: "AM"
        }
    ]

    return (
        <div className="naslovna-reviews">
            {
                !listing ? (
                    <h2>Povjerenje koje traje</h2>
                ) : <h2>Klijenti zadovoljni svojim vrtom</h2>
            }
            <div className="reviews-container">
                {data.map((review, index) => (
                    <Testimonial
                        key={index}
                        text={review.text}
                        name={review.name}
                        avatar={review.avatar}
                        location={review.location}
                    />
                ))}

            </div>
        </div>
    )
}

export default NaslovnaReviews