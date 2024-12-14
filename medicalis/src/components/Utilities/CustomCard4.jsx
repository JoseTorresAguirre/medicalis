import React from "react";

const CustomCard4 = ({ imgSrc, tittle, onClick }) => {
  return (
    <div
      className="cursor-pointer bg-white w-[18rem] h-[15rem] rounded-[2rem] flex flex-col justify-center items-center shadow-md"
      onClick={onClick} // Asegúrate de pasar el evento onClick
    >
      <img src={imgSrc} alt={tittle} className="w-20 h-20" />
      <h2 className="text-[#274760] text-[1.5rem] text-center font-semibold whitespace-pre-line">
        {tittle}
      </h2>
    </div>
  );
};

export default CustomCard4;
