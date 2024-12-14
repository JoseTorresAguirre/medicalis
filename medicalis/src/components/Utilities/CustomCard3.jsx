import React from "react";
import PropTypes from "prop-types";

const CustomCard3 = ({
  imgSrc,
  imgClass,
  tittle,
  tittleClass,
  description,
  descriptionClass,
}) => {
  return (
    <div className="bg-white w-[15rem] h-[18rem] py-[1rem] rounded-[2rem] shadow-xl">
      <div className="flex justify-center items-center pt-2">
        <div className="bg-[#307BC4] w-[4rem] h-[4rem] flex justify-center items-center rounded-[1rem]">
          <img src={imgSrc} alt="img" className="w-12 h-12" />
        </div>
        <div className="flex justify-center items-center pl-5">
          <h1 className="text-[#274760] text-[0.8rem] font-semibold whitespace-pre-line">
            {tittle}
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-[#8F9FAC] text-[0.8rem] pt-5 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

CustomCard3.propTypes = {
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomCard3;
