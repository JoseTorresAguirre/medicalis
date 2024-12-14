import React from "react";
import PropTypes from "prop-types";

const CustomTittle = ({
  imgSrc,
  imgClass,
  tittle,
  tittleClass,
  description,
  descriptionClass,
}) => {
  return (
    <div className="flex justify-center w-screen">
      <img src={imgSrc} alt="img" className={imgClass} />
      <h1 className={`${tittleClass} py-[5rem] font-semibold`}>
        {tittle}
        <p className={descriptionClass}>{description}</p>
      </h1>
    </div>
  );
};

CustomTittle.propTypes = {
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomTittle;
