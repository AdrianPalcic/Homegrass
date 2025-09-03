import { ChevronRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const ProjektCard = ({ title, slika, opis, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projekt/${slug}`);
  };

  return (
    <div className="projekt-card" onClick={handleClick}>
      <div className="image">
        <img
          src={slika}
          alt="Savršeno postavljena umjetna trava, napravite i sebi vrt iz snova sa Homegrass umjetnim travnjacima"
          loading="lazy"
        />
      </div>
      <h3>{title}</h3>
      <p>{opis}</p>
      <Link to={`/projekt/${slug}`}>
        Detalji projekta <ChevronRight size={20} />
      </Link>
    </div>
  );
};

export default ProjektCard;
