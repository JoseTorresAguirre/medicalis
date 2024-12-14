import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

const CustomBanner3 = ({
  tittle,
  tittleClass,
  description,
  descriptionClass,
  imgSrc,
  imgClass,
}) => {
  return (
    <div className="w-[90vw] flex justify-center items-center">
      <div className="w-[60vw]">
        <div>
          <h1 className="text-[#274760] text-[3rem] font-semibold text-center whitespace-pre-line">
            {tittle}
          </h1>
        </div>
        <div>
          <p className="flex items-center justify-center text-[#8F9FAC] text-[1rem] pt-5 text-centerwhitespace-pre-line">
            {description}
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <CustomButton
            to="/agendar"
            tittle="Agendar mi cita"
            imgSrc="https://img.icons8.com/?size=48&id=12958&format=png"
            tittleClass="flex items-center px-4 py-1 bg-[#2e72b2] text-white hover:text-blue-300 h-15 w-60 rounded-2xl font-semibold  justify-center"
          ></CustomButton>
        </div>
      </div>
      <div className="w-[40vw] h-[50vh] flex justify-center items-end">
        <img src={imgSrc} alt="img" className="h-[27rem] w-[25rem]" />
      </div>
    </div>
  );
};

CustomBanner3.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
};

export default CustomBanner3;
