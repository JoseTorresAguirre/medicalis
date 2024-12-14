import React from "react";
import PropTypes from "prop-types";

const CustomCard2 = ({ imgSrc, imgClass, tittle, tittleClass }) => {
  return (
    <div className="bg-white w-[15rem] h-[15rem] rounded-[2rem] flex flex-col justify-center items-center shadow-md">
      <img src={imgSrc} alt="img" className="w-16 h-16" />
      <h1 className="text-[#274760] text-[1rem] pt-4 text-center font-semibold whitespace-pre-line">
        {tittle}
      </h1>
    </div>
  );
};

CustomCard2.propTypes = {
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
};

export default CustomCard2;
