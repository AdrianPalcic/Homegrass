import React from "react";
import "../../css/banner.css";
import { Link } from "react-router-dom";
import useCMSStore from "../../store/useCMSStore";
const Banner = () => {
  const proizvodi = useCMSStore((state) => state.proizvodi);
  const proizvod = proizvodi.find((p) => p.acf.popust === true);
  const rawTitle = proizvod ? proizvod.title?.rendered || "" : "";
  const title = proizvod ? rawTitle.replace(/<[^>]+>/g, "") : "";
  const postotak = proizvod ? proizvod.acf.postotak : "";

  if (!proizvod) return;

  return (
    <div className="banner">
      <h3>
        Iskoristi priliku –{" "}
        <Link to={`/proizvod/${proizvod.slug}`} className="banner-link">
          {title} umjetna trava
        </Link>{" "}
        sada {postotak}% jeftinija! Transformiraj svoj vanjski prostor dok traje
        Black Friday akcija!
      </h3>
    </div>
  );
};

export default Banner;
