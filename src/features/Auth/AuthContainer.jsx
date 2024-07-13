import React from "react";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const renderStep = () => {
    switch (step) {
      case 1:
        return <SendOtpForm />;

      case 2:
        return <CheckOtpForm />;

      default:
        return null;
    }
  };
  return <div className="w-full  flex justify-center">{renderStep()}</div>;
};

export default AuthContainer;
