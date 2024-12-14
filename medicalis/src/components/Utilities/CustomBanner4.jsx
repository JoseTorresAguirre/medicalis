import React from "react";
import PropTypes from "prop-types";
import CustomContact2 from "./CustomContact2";

const CustomBanner4 = ({ tittle, tittleClass }) => {
  return (
    <div className="w-[90vw] h-[30vh] mx-auto mt-[2rem]">
      <div className="mb-[5rem]">
        <h1 className={tittleClass}>{tittle}</h1>
      </div>
      <div className="flex justify-center space-x-32">
        <CustomContact2
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085010/phone2_dzgpti.png"
          tittle="Phone"
          description="123-456-7890"
        ></CustomContact2>
        <CustomContact2
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085005/mail_js1aqk.png"
          tittle="Email"
          description="medicalis@gmail.com"
        ></CustomContact2>
        <CustomContact2
          imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731085004/location2_vrdf93.png"
          tittle="Location"
          description="123 Anywhere St. Amy City"
        ></CustomContact2>
      </div>
    </div>
  );
};

CustomBanner4.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
};

export default CustomBanner4;
