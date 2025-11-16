import React from "react";
import { HashLink } from "react-router-hash-link";

const ButtonMain = ({ text, link }) => {
  return (
    <HashLink smooth to={`/vodic#${link}`} className="button-primary">
      {text}
    </HashLink>
  );
};

export default ButtonMain;
