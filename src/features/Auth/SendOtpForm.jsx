import React, { useState } from "react";
import Input from "../../ui/Input";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumbber] = useState("");
  const sendOtpHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form className="space-y-5" onSubmit={sendOtpHandler}>
        <Input
          label={"شماره مبایل"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumbber(e.target.value)}
          name={"phoneNumber"}
          type={"number"}
        />
        <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtpForm;
