const ProizvodButton = ({ title }) => {
    const subject = `Upit za proizvod: ${title}`;
    const body = `Pozdrav,%0D%0A%0D%0Azanima me više informacija o proizvodu: ${title}`;
    const mailtoLink = `mailto:adrian.palcic@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <a
            href={`mailto:adrian.palcic@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
            className="button-primary"
        >
            Zatražite Ponudu
        </a>
    );
};

export default ProizvodButton;
