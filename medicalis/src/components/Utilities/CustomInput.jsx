import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({
  tittle,
  tittleClass,
  type,
  placeholder,
  inputClass,
  containerClass,

  inputMode,
  maxLength,
  inputName,
  value,
  onChange,
}) => {
  console.log(value);
  return (
    <div className={containerClass}>
      <label className={tittleClass}>{tittle}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={inputClass}
        required
        inputMode={inputMode}
        maxLength={maxLength}
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

CustomInput.propTypes = {
  tittle: PropTypes.string,
  tittleClass: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  inputClass: PropTypes.string,
  containerClass: PropTypes.string,
  pattern: PropTypes.string,
  inputMode: PropTypes.string,
  maxLength: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomInput;
