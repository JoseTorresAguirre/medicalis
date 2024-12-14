import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomButton = ({ to, tittle, imgSrc, tittleClass = "" }) => {
  // Combina cualquier clase adicional
  const buttonClasses = tittleClass;

  const buttonContent = (
    <>
      <span>{tittle}</span>
      {imgSrc && <img src={imgSrc} alt={`${tittle} icon`} className="ml-2" />}
    </>
  );

  return to ? (
    <Link to={to} className={buttonClasses}>
      {buttonContent}
    </Link>
  ) : (
    <button className={buttonClasses}>{buttonContent}</button>
  );
};

// PropTypes para validación
CustomButton.propTypes = {
  tittle: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  to: PropTypes.string,
  tittleClass: PropTypes.string,
};

export default CustomButton;
