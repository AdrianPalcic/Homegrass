import React from 'react'
import ProizvodCard from '../cards/ProizvodCard'
import DIYCard from '../cards/DIYCard'
import AlatCard from '../cards/AlatCard'
const WhyDIY = () => {


    return (
        <div className="why-diy">
            <div className="section-title">
                <h2>Potrebni alati i pribor</h2>
                <h3>za postavljanje travnjaka</h3>
            </div>
            <div className="card-container">
                <AlatCard />
                <AlatCard />
                <AlatCard />
                <AlatCard />
                <AlatCard />
            </div>

            <div className="section-title">
                <h2 className='materijali-head'>Potrebni materijali</h2>
            </div>
            <div className="card-container materijali">
                <AlatCard />
                <AlatCard />
                <AlatCard />
                <AlatCard />
                <AlatCard />
            </div>

        </div>
    )
}

export default WhyDIY