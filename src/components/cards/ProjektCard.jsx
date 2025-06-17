import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ProjektCard = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/projekti')
    }


    return (
        <div className="projekt-card" onClick={handleClick}>
            <div className="image">
                <img src="/projekt1.jpg" alt="Savršeno postavljena umjetna trava, napravite i sebi vrt iz snova sa Homegrass umjetnim travnjacima" loading='lazy' />
            </div>
            <h3>Evergreen umjetni travnjaci</h3>
            <p>Ultimate density and softness. Excellent flexibility and very high durability. An elegant artificial...</p>
            <Link to="/">Detalji projekta <ChevronRight size={20} /></Link>
        </div>
    )
}

export default ProjektCard