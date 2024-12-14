import React from "react";
import PropTypes from "prop-types";

const CustomCard = ({
  containerClass,
  imgSrc,
  tittle,
  description,
  imgClass,
  tittleClass,
  descriptionClass,
}) => {
  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-center w-[20rem] h-[12rem]  rounded-[2rem] shadow-2xl`}
    >
      <div className="flex justify-center items-center py-[1rem]">
        <img src={imgSrc} alt="img" className="w-10 h-10" />
        <h1 className="text-[#274760] px-2 text-[1rem] font-semibold">
          {tittle}
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="flex text-center text-[#8F9FAC] text-[0.6rem] whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  containerClass: PropTypes.string,
  imgSrc: PropTypes.string,
  tittle: PropTypes.string,
  description: PropTypes.string,
  imgClass: PropTypes.string,
  tittleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomCard;
