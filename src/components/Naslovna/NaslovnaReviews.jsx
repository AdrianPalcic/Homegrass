import React from 'react'

const NaslovnaReviews = ({ listing }) => {
    return (
        <div className="naslovna-reviews">
            {
                !listing ? (
                    <h2>Povjerenje koje traje</h2>
                ) : <h2>Klijenti zadovoljni svojim vrtom</h2>
            }
            <div className="reviews-container">
                <div className="review">
                    <div className='quote'>
                        <span>"</span>
                        <span>"</span>
                    </div>
                    <p className='text'>Nakon postavljanja HomeGrass umjetne trave, naš vrt je postao omiljeno mjesto za cijelu obitelj! Nema više blata ni košnje, a travnjak uvijek izgleda savršeno zeleno. . Preporučujem svakome tko želi bezbrižno zelenilo tijekom cijele godine!</p>
                    <p className='name'> <strong>Ana K.,</strong> Zagreb</p>
                </div>
                <div className="review">
                    <div className='quote'>
                        <span>"</span>
                        <span>"</span>
                    </div>
                    <p className='text'>Nakon postavljanja HomeGrass umjetne trave, naš vrt je postao omiljeno mjesto za cijelu obitelj! Nema više blata ni košnje, a travnjak uvijek izgleda savršeno zeleno. . Preporučujem svakome tko želi bezbrižno zelenilo tijekom cijele godine!</p>
                    <p className='name'> <strong>Ana K.,</strong> Zagreb</p>
                </div>
                <div className="review">
                    <div className='quote'>
                        <span>"</span>
                        <span>"</span>
                    </div>
                    <p className='text'>Nakon postavljanja HomeGrass umjetne trave, naš vrt je postao omiljeno mjesto za cijelu obitelj! Nema više blata ni košnje, a travnjak uvijek izgleda savršeno zeleno. . Preporučujem svakome tko želi bezbrižno zelenilo tijekom cijele godine!</p>
                    <p className='name'> <strong>Ana K.,</strong> Zagreb</p>
                </div>
            </div>
        </div>
    )
}

export default NaslovnaReviews