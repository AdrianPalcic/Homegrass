import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Hvala = () => {
    return (
        <div className="hvala-page">
            <Helmet>
                <title>Zahvaljujemo na povjerenju | HomeGrass - Umjetna trava</title>
                <meta name="description" content="Hvala vam što ste kontaktirali HomeGrass, vodećeg dobavljača umjetne trave i travnjaka u Hrvatskoj. Vaša poruka je zaprimljena." />
                <meta property="og:title" content="Hvala na povjerenju | HomeGrass Umjetni Travnjaci" />
                <meta property="og:description" content="Zahvaljujemo na interesu za naše umjetne travnjake. Naš tim će vas kontaktirati u najkraćem roku." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://homegrass.hr/hvala" />
                <link rel="canonical" href="https://homegrass.hr/hvala" />
            </Helmet>

            <div className="hvala-content">
                <CheckCircle size={60} color="#15823E" />
                <h1>Hvala na vašoj poruci!</h1>
                <p>Naš stručni tim za umjetne travnjake će vam odgovoriti u najkraćem roku.</p>
                <p className="additional-info">U međuvremenu, pogledajte naše <Link to="/proizvodi">kolekcije umjetne trave</Link> ili <Link to="/projekti">vrtove koje smo uredili sa našim proizvodima</Link>.</p>
                <Link to="/" className="home-button">Povratak na početnu stranicu</Link>
            </div>
        </div>
    )
}

export default Hvala;