import React from 'react'
import ProjektCard from '../cards/ProjektCard'

const ProjektiListing = () => {
    return (
        <div className="project-listing">
            <h2>Inspiracija za vaš vrt</h2>
            <h3>Pogledajte kako izgleda umjetna trava HomeGrass u stvarnim vrtovima, na terasama i igralištima diljem Hrvatske.</h3>
            <div className="projekti">
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />
                <ProjektCard />
            </div>
        </div>

    )
}

export default ProjektiListing