import ProjektCard from "../cards/ProjektCard";
import ButtonMain from "../buttons/ButtonMain";
import useCMSStore from "../../store/useCMSStore";

const projekti = ({ listing }) => {
  const projekti = useCMSStore((state) => state.projekti);

  const shortenText = (text, maxLength = 90) => {
    return text.length > maxLength
      ? text.slice(0, maxLength).trim() + "..."
      : text;
  };

  const fewProjects = projekti.slice(0, 3);

  return (
    <div className="projekti-container">
      {!listing ? (
        <div className="section-title">
          <h2>Naši najnoviji projekti</h2>
          <h3>Umjetna trava gdje god poželite</h3>
        </div>
      ) : (
        <div className="section-title2">
          <h2>Inspiracija za vaš vrt</h2>
          <h3>
            Pogledajte kako izgleda umjetna trava HomeGrass u stvarnim vrtovima,
            na terasama i igralištima diljem Hrvatske.
          </h3>
        </div>
      )}
      <div className="projekti">
        {listing
          ? projekti.map((p) => {
              const title = p.title?.rendered;
              const opis = p.acf?.opis || "";
              const slika =
                p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

              return (
                <ProjektCard
                  key={p.id}
                  slug={p.slug}
                  title={title}
                  opis={shortenText(opis)}
                  slika={slika}
                />
              );
            })
          : fewProjects.map((p) => {
              const title = p.title?.rendered;
              const opis = p.acf?.opis || "";
              const slika =
                p._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "";

              return (
                <ProjektCard
                  key={p.id}
                  slug={p.slug}
                  title={title}
                  opis={shortenText(opis)}
                  slika={slika}
                />
              );
            })}
      </div>

      {!listing && (
        <ButtonMain text="Pregledajte sve projekte" link={"projekti"} />
      )}
    </div>
  );
};

export default projekti;
