
import SpecCard from '../cards/SpecCard'

const ProizvodSpecs = ({ karakteristike }) => {
    return (
        <div className='proizvod-specs' >
            <h2>Specifikacije proizvoda:</h2>

            <div className="specs-container">
                {karakteristike.map((k, index) => (
                    <SpecCard key={index} label={k.label} value={k.value} />
                ))}
            </div>
        </div>
    )
}

export default ProizvodSpecs