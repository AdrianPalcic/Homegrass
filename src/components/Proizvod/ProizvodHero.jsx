import React, { useState } from "react";
import ProizvodButton from "../buttons/ProizvodButton";

const ProizvodHero = ({
  title,
  alt,
  opis,
  image,
  images,
  price,
  hasDiscount,
  finalPrice,
  poruka,
}) => {
  const [selectedImage, setSelectedImage] = useState(image);

  return (
    <div className="proizvod-hero">
      <div className="proizvod-hero-left">
        <h2>{title} - umjetna trava prirodnog izgleda </h2>
        <h3>{opis}</h3>
        {hasDiscount ? (
          <div className="contain-the-price">
            <div className="price-container">
              <span className="prev">{price}€</span>{" "}
              <span className="now">{finalPrice.toFixed(2)}€</span>{" "}
            </div>
            {poruka === "Nema Poruka" ? (
              ""
            ) : (
              <div className="expire">
                Black Friday akcija traje do 05.12.2025 ili do isteka zaliha.
              </div>
            )}
          </div>
        ) : (
          <p style={{ marginBottom: "18px" }}>{price}€</p>
        )}
        <ProizvodButton title={title} />
      </div>
      <div className="proizvod-hero-right">
        <div className="image">
          <img src={selectedImage} alt={alt} />
        </div>
        <div className="images">
          {images.map((key, index) => (
            <img
              key={index}
              src={[key.url]}
              alt="Homegrass umjetna trava"
              onClick={() => setSelectedImage(key.url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProizvodHero;
