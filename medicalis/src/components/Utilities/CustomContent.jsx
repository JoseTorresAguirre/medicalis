import React from "react";
import PropTypes from "prop-types";

const CustomContent = ({
  tittle,
  tittleClass,
  description,
  descriptionClass,
}) => {
  return (
    <div className="my-[8rem] w-screen">
      <div className="w-[90vw]  mx-auto">
        <div className="text-center">
          <h1 className={`${tittleClass} whitespace-pre-line`}>{tittle}</h1>
        </div>
        <div className="text-center">
          <p className={`${descriptionClass} whitespace-pre-line`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

CustomContent.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  description: PropTypes.string,
  descriptionClass: PropTypes.string,
};

export default CustomContent;
