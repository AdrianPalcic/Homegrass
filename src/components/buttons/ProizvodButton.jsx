const ProizvodButton = ({ title }) => {
  const subject = `Upit za proizvod: ${title}`;
  const body = `Pozdrav,%0D%0A%0D%0Azanima me više informacija o proizvodu: ${title}`;

  return (
    <a
      href={`mailto:info@homegrass.hr?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`}
      className="button-primary"
    >
      Zatražite Ponudu
    </a>
  );
};

export default ProizvodButton;
