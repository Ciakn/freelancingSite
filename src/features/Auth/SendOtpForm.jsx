import React, { useState } from "react";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumbber] = useState("");
  return (
    <div>
      <form className="space-y-5">
        <div>
          <label className="mb-1" htmlFor="phoneNumber">
            {" "}
            شماره مبایل
          </label>
          <input
            id="phoneNumber"
            type="text"
            className="w-full py-3 px-4 rounded-xl text-secondary-900 border 
            broder-gray-100 hover:border-primary-300 focus:shadow-primary-900 
            transition-all duration-300 ease-in-out focus:border-primary-300"
          />
        </div>
        <button className="py-1 px-4 font-bold  text-white w-full rounded-md bg-primary-900 transition-all duration-300 hover:bg-primary-800 shadow-md shadow-primary-300">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtpForm;
