import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomButton2 = ({
  to,
  type = "button",
  onClick,
  tittle,
  bottonClass,
}) => {
  // Si "to" existe, renderizamos un Link; si no, un botón normal
  if (to) {
    return (
      <Link to={to} className={bottonClass}>
        {tittle}
      </Link>
    );
  }

  return (
    <button
      type={type} // Puede ser "submit" o "button"
      onClick={onClick}
      className={bottonClass}
    >
      {tittle}
    </button>
  );
};

CustomButton2.propTypes = {
  to: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.string,
  tittle: PropTypes.string,
  bottonClass: PropTypes.string,
};

export default CustomButton2;
