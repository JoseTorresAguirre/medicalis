import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomLink = ({ to, tittle, imgSrc, tittleClass, imgClass }) => {
  return (
    <div>
      <Link to={to} className={tittleClass}>
        {imgSrc && (
          <img src={imgSrc} alt={`${tittle} icon`} className={imgClass} />
        )}
        <span>{tittle}</span>
      </Link>
    </div>
  );
};

CustomLink.propTypes = {
  to: PropTypes.string,
  tittle: PropTypes.string,
  imgSrc: PropTypes.string,
  tittleClass: PropTypes.string,
  imgClass: PropTypes.string,
};

export default CustomLink;
