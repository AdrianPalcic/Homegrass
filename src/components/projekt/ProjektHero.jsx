
import { Link } from 'react-router-dom'

const ProjektHero = ({ title, namjena, slika, lokacija, proizvod, opis, proizvodId }) => {






    return (
        <>


            <div className="projekt-hero">
                <div className="projekt-hero-left">
                    <h2>{title}</h2>
                    <h3>{opis}</h3>
                    <div className="karakt">
                        <p><strong>Namjena: </strong>{namjena}</p>
                        <p><strong>Lokacija: </strong>{lokacija}</p>
                        <p><strong>Korišteni proizvodi: </strong><Link to={`/proizvod/${proizvodId}`}>{proizvod}</Link></p>
                    </div>
                </div>
                <div className="projekt-hero-right">
                    <div className="image">
                        <img src={slika} alt="Dobrodošli u Homegrass, vaš najbolji dobavljač umjetne trave" fetchPriority='high' />
                    </div>
                </div>
            </div>


        </>
    )
}

export default ProjektHero