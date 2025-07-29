import { useState } from 'react';
import FormButton from '../buttons/FormButton';

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault;
        setIsSubmitted(!isSubmitted)
    }
   

    return (
        <div className="newsletter">
            <div className="overlay-image">
                <img src="/newsletter.webp" alt="Prijavite se na Homegrass newsletter i primajte savjete i ponude za najbolje umjetne travnjake" />
            </div>
            <div className="newsletter-content">
                <h2>Prijavite se na HomeGrass newsletter i prvi saznajte novosti, popuste i korisne savjete za vaš vrt.</h2>
                {!isSubmitted ? (
                    <div className="form">
                        <h3>Primajte savjete i ponude</h3>
                        <form onSubmit={handleSubmit}>
                  

                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="Vaš Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <FormButton text={"Prijava"} />
                        </form>

                    </div>
                ) : (
                    <div className="form-submitted">
                        <p>Uspješna prijava! Od sada ćete primati najnovije vijesti, savjete i ponude izravno na svoj e-mail.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Newsletter;
