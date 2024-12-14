import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

const CustomInfo = ({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  tittle1,
  tittle2,
  tittle3,
  description1,
  description2,
  description3,
}) => {
  return (
    <div className="bg-white shadow-md rounded-[1rem] h-[20vh] w-[80vw] absolute bottom-0 left-[10vw] flex justify-center items-center z-10">
      <div className="flex pr-20 items-center">
        <div>
          <img src={imgSrc1} alt="img" className="" />
        </div>
        <div>
          <h1 className="text-[#274760] text-[1rem] px-6 font-semibold">
            {tittle1}
          </h1>
          <p className="text-[#597185] text-[1rem] px-6">{description1}</p>
        </div>
      </div>
      <div className="flex pr-20 items-center">
        <div>
          <img src={imgSrc2} alt="img" className="" />
        </div>
        <div>
          <h1 className="text-[#274760] text-[1rem] px-6 font-semibold">
            {tittle2}
          </h1>
          <p className="text-[#597185] text-[1rem] px-6">{description2}</p>
        </div>
      </div>
      <div className="flex pr-20 items-center">
        <div>
          <img src={imgSrc3} alt="img" className="" />
        </div>
        <div>
          <h1 className="text-[#274760] text-[1rem] px-6 font-semibold">
            {tittle3}
          </h1>
          <p className="text-[#597185] text-[1rem] px-6">{description3}</p>
        </div>
      </div>
      <div>
        <CustomButton
          to="/agendar"
          tittle="Agendar mi cita"
          imgSrc="https://img.icons8.com/?size=48&id=12958&format=png"
          tittleClass="flex items-center px-4 py- bg-[#2e72b2] text-white hover:text-blue-300 h-12 w-60 rounded-[0.5rem] font-semibold  justify-center"
        ></CustomButton>
      </div>
    </div>
  );
};

CustomInfo.propTypes = {
  imgSrc1: PropTypes.string,
  imgSrc2: PropTypes.string,
  imgSrc3: PropTypes.string,
  tittle1: PropTypes.string,
  tittle2: PropTypes.string,
  tittle3: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
};

export default CustomInfo;
