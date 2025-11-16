import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonSecondary = ({ text, link, label }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${link}`);
  };

  return (
    <div className="button-secondary" onClick={handleClick} aria-label={label}>
      {text}
    </div>
  );
};

export default ButtonSecondary;
