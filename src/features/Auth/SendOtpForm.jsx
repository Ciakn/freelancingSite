import React, { useState } from "react";
import Input from "../../ui/Input";

const SendOtpForm = () => {
  const [phoneNumber, setPhoneNumbber] = useState("");
  return (
    <div>
      <form className="space-y-5">
        <Input
          label={"شماره مبایل"}
          value={phoneNumber}
          onChange={(e) => setPhoneNumbber(e.target.value)}
          name={"phoneNumber"}
          type={"number"}
        />
        <button className="btn btn--primary w-full">ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtpForm;
