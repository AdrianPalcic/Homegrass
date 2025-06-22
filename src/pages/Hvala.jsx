import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'

const Hvala = () => {
    return (
        <div className="hvala-page">
            <div className="hvala-content">
                <CheckCircle size={60} color="#15823E" />
                <h1>Hvala na vašoj poruci!</h1>
                <p>Odgovorit ćemo vam u najkraćem roku.</p>
                <Link to="/" className="home-button">Povratak na početnu</Link>
            </div>
        </div>
    )
}

export default Hvala;
