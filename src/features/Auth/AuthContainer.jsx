import React from "react";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumbber] = useState("09363443652");

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumbber={setPhoneNumbber}
          />
        );

      case 2:
        return (
          <CheckOtpForm
            phoneNumber={phoneNumber}
            setPhoneNumbber={setPhoneNumbber}
            onChange={(e) => setPhoneNumbber(e.target.value)}
            onBack={() => setStep((s) => s - 1)}
          />
        );

      default:
        return null;
    }
  };
  return <div className="w-full  flex justify-center">{renderStep()}</div>;
};

export default AuthContainer;
