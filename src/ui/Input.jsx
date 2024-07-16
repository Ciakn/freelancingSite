import React from "react";

const Input = ({ label,
  value, onChange, name, type }) => {
  console.log(value);
  return (
    <div className="w-full">
      <label className="mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id="phoneNumber"
        type={type}
        value={value}
        onChange={onChange}
        className="textField__input"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
