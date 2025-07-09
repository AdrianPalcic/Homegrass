import { useState } from 'react';
import FormButton from '../buttons/FormButton';

const Newsletter = () => {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const [newsletter, setNewsletter] = useState(""); // honeypot

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newsletter) return; // honeypot check

        if (!email) {
            setError("Molimo unesite email.");
            return;
        }

        // Provjera lokalno u localStorage
        const subscribedEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");
        if (subscribedEmails.includes(email)) {
            setError("Ovaj email je već prijavljen.");
            return;
        }

        try {
            const response = await fetch("https://formsubmit.co/ajax/info@homegrass.hr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    newsletter, // honeypot polje
                    email,
                    _subject: "Nova prijava na HomeGrass newsletter",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Spremi email u localStorage
                localStorage.setItem("subscribedEmails", JSON.stringify([...subscribedEmails, email]));

                setIsSubmitted(true);
                setEmail("");
                setError(null);
            } else {
                setError(data.message || "Greška pri slanju.");
            }
        } catch {
            setError("Greška pri slanju.");
        }
    };

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
                            {/* Honeypot polje - sakriveno */}
                            <input
                                type="text"
                                name="newsletter"
                                value={newsletter}
                                onChange={(e) => setNewsletter(e.target.value)}
                                style={{ display: "none" }}
                                tabIndex={-1}
                                autoComplete="off"
                            />

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
