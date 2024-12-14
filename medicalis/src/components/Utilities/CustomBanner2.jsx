import React from "react";
import PropTypes from "prop-types";

const CustomBanner2 = ({
  imgSrc,
  imgClass,
  tittle,
  tittleClass,
  subtittle,
  subtittleClass,
  imgSrc2,
  imgClass2,
  description,
  descriptionClass,
  description2,
  descriptionClass2,
}) => {
  return (
    <div className="w-[90vw] flex mx-auto pt-[5rem]">
      <div className="w-1/2 flex justify-center items-center">
        <img src={imgSrc} alt="img" className="w-[70vh]" />
      </div>
      <div className="w-1/2 p-4 flex flex-col items-start">
        <div>
          <h1 className="text-[#274760] text-[3rem] font-semibold">{tittle}</h1>
          <h2 className="text-[#307BC4] text-[1.2rem] font-semibold">
            {subtittle}
          </h2>
        </div>
        <div className="pt-[3rem] ">
          <div className="flex">
            <img src={imgSrc2} alt="img" className="w-10 h-10 mt-1.5" />
            <p className={`${descriptionClass} whitespace-pre-line`}>
              {description}
            </p>
          </div>
          <div>
            <p className={`${descriptionClass2} whitespace-pre-line`}>
              {description2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomBanner2.propTypes = {
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  subtittle: PropTypes.string,
  subtittleClass: PropTypes.string,
  imgSrc2: PropTypes.string,
  imgClass2: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  description2: PropTypes.string,
  descriptionClass2: PropTypes.string,
};

export default CustomBanner2;
