import React from "react";
import ButtonMain from "../buttons/ButtonMain";
import Kvalifikacije from "../global/Kvalifikacije";

const NaslovnaOnama = () => {
  return (
    <>
      <div className="container">
        <div className="left">
          <h2>Vaš partner za savršenu travu</h2>
          <h3>
            HomeGrass je vodeći specijalist za umjetnu travu u Hrvatskoj. Naš
            stručni tim već godinama pomaže obiteljima da svoj vrt, balkon ili
            dvorište pretvore u zelenu oazu – bez brige o zalijevanju, košnji i
            održavanju. Vrhunska kvaliteta, prirodan izgled i pouzdana ugradnja
            naš su standard.
          </h3>
          <ButtonMain text={"Saznajte više"} link={"onama"} />
        </div>
        <div className="right">
          <div className="image">
            <img
              src="/Homegrass1.webp"
              alt="Istražite najbolje umjetne travnjake u Homegrass"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Kvalifikacije />
    </>
  );
};

export default NaslovnaOnama;
