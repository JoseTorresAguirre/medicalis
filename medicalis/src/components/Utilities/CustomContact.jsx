import React from "react";
import PropTypes from "prop-types";

const CustomContact = ({
  containerClass,
  subContainerClass,
  imgSrc,
  imgClass,
  tittle,
  description,
  titleClass,
  descriptionClass,
}) => {
  return (
    <div className="pl-[5rem] mb-[4rem]">
      <div className="flex justify-center items-center">
        <img src={imgSrc} alt="phone icon" className="w-16 h-16" />
        <div>
          <h1 className="text-[#274760] px-5 text-[1rem] font-semibold">
            {tittle}
          </h1>
          <h2 className="text-[#274760] px-5 text-[0.8rem] font-normal">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
};

CustomContact.propTypes = {
  containerClass: PropTypes.string,
  subContainerClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  tittle: PropTypes.string,
  description: PropTypes.string,
  titleClass: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomContact;
