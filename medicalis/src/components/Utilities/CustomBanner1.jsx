import React from "react";
import PropTypes from "prop-types";
import CustomButton from "./CustomButton";

const CustomBanner1 = ({
  tittle,
  tittleClass,
  description,
  descriptionClass,
  imgSrc,
  imgClass,
}) => {
  return (
    <div className="bg-[#A9CFF3] h-[calc(90vh-5rem)] w-screen  ">
      <div className="flex relative justify-center w-[90vw] mx-auto">
        <div className="flex   justify-center">
          <div className="w-[50vw]  relative">
            <h1 className={`${tittleClass} whitespace-pre-line`}>{tittle}</h1>
            <p className={`${descriptionClass} whitespace-pre-line`}>
              {description}
            </p>
            <div className="pt-[3rem]">
              <CustomButton
                to="/agendar"
                tittle="Agendar mi cita"
                imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085888/arrow-right_kubz4k.png"
                tittleClass="flex items-center bg-[#2e72b2] text-white text-[1.2rem]
              hover:text-blue-300 rounded-[1rem] font-semibold
              justify-center py-1 max-w-[450px] w-[40%]"
              />
            </div>
          </div>
        </div>
        <div className="flex  w-[100%]">
          <div className="absolute right-0   h-[85vh] w-[70%]">
            <img src={imgSrc} alt="img" className={imgClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

CustomBanner1.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
};

export default CustomBanner1;
