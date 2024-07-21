import React from "react";

const RadioInput = ({ label, type, value, onChange, name, id, checked }) => {
    console.log(checked);
  return (
    <div className="flex justify-center items-center gap-x-2 text-secondary-600">
      <label htmlFor="FREELANCER">{label}</label>{" "}
      <input
        onChange={onChange}
        className="cursor-pointer focus:ring-0 form-radio text-red-500 "
        type={type}
        id={id}
        value={value}
        name={name}
        checked={checked}
      />
    </div>
  );
};

export default RadioInput;
