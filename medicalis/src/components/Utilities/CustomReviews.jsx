import React from "react";
import PropTypes from "prop-types";
import CustomContact from "./CustomContact";

const CustomReviews = ({
  tittle,
  tittleClass,
  subtittle,
  subtittleClass,
  imgSrc,
  imgClass,
  description,
  descriptionClass,
  voteImg,
  voteClass,
}) => {
  return (
    <div className="pt-[5rem] w-[90vw]">
      <h1 className="text-[#274760] text-[2.5rem] font-semibold text-center">
        {tittle}
      </h1>
      <h2 className="text-[#307BC4] text-[1rem] font-semibold text-center">
        {subtittle}
      </h2>

      <div className="pt-[3rem] flex ">
        <div className="w-[40vw] flex flex-col items-start justify-center">
          <CustomContact
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/avatar1_u7b4wz.png"
            tittle="Paulo Hubert"
            description="New York, USA"
          ></CustomContact>
          <CustomContact
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/avatar2_qco0pg.png"
            tittle="Laurence Vendetta"
            description="California, USA"
          ></CustomContact>
          <CustomContact
            imgSrc="https://res.cloudinary.com/dj3xwsle9/image/upload/v1731084997/avatar3_pqxdla.png"
            tittle="Cassandra Raul"
            description="Florida"
          ></CustomContact>
        </div>
        <div className="w-[10vw] flex items-center justify-center">
          <div className="w-1 h-[30rem] bg-[#274760]"></div>
        </div>
        <div className="flex flex-col justify-end items-end  w-[40vw]">
          <div>
            <img
              src={imgSrc}
              alt="img"
              className="ml-[-5rem] pt-[1rem] absolute"
            />
            <p className="text-[#8F9FAC] text-[1rem] pt-5 whitespace-pre-line">
              {description}
            </p>
            <div className=" pt-2 self-start flex">
              <img src={voteImg} alt="img" className="w-[1.5rem] h-[1.5rem]" />
              <img src={voteImg} alt="img" className="w-[1.5rem] h-[1.5rem]" />
              <img src={voteImg} alt="img" className="w-[1.5rem] h-[1.5rem]" />
              <img src={voteImg} alt="img" className="w-[1.5rem] h-[1.5rem]" />
              <img src={voteImg} alt="img" className="w-[1.5rem] h-[1.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomReviews.propTypes = {
  containerClass: PropTypes.string,
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  subtittle: PropTypes.string,
  subtittleClass: PropTypes.string,
  imgSrc: PropTypes.string,
  imgClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
  voteImg: PropTypes.string,
  voteClass: PropTypes.string,
};

export default CustomReviews;
