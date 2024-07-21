import React from 'react'

const RadioInput = ({label, type , name , id}) => {
  return (
    <div className="flex justify-center items-center gap-x-2 text-secondary-600">
      <label htmlFor="FREELANCER">{label}</label>{" "}
      <input
        className="cursor-pointer focus:ring-0 form-radio text-red-500 "
        type={type}
        id={id}
        value={id}
        name={name}
      />
    </div>
  );
}

export default RadioInput