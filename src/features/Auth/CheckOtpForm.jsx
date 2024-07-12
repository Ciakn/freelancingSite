import React, { useState } from "react";
import OTPInput from "react-otp-input";

const CheckOtpForm = () => {
  const [otp, setOtp] = useState();
  return (
    <div>
      <form className="space-y-5">
        <p className="font-bold flex justify-center text-secondary-800">
          کد تایید را وارد کنید
        </p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input type="number" {...props} />}
          renderSeparator={<span>-</span>}
          containerStyle="flex flex-row-reverse justify-center gap-x-2 "
          inputStyle={{
            border: "1px solid rgb(var(--color-primary-700))",
            borderRadius: "0.375rem",
            width: "1.75rem",
            height: "1.75rem",
            fontSize: "1.25rem",
            padding: "0.5rem 0.2rem",
          }}
        />
        <button className="btn btn--primary w-full"> تایید</button>
      </form>
    </div>
  );
};

export default CheckOtpForm;
