import React from "react";
import PropTypes from "prop-types";

const CustomContact3 = ({ imgSrc, tittle }) => {
  return (
    <div className="flex">
      <div className="flex items-center">
        <img src={imgSrc} alt="phone icon" className="w-[2rem] h-[2rem]" />
        <div>
          <h1 className="text-[#274760] text-[0.8rem] ml-[1rem]">{tittle}</h1>
        </div>
      </div>
    </div>
  );
};

CustomContact3.propTypes = {
  imgSrc: PropTypes.string,
  tittle: PropTypes.string,
};

export default CustomContact3;
