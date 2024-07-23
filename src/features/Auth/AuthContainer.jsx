import React from "react";
import { useState } from "react";
import SendOtpForm from "./SendOtpForm";
import CheckOtpForm from "./CheckOtpForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
const AuthContainer = () => {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumbber] = useState("09363443654");
  const {
    isPending,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2);
    } catch (error) {
      toast.error("خطایی رخ داده", error?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpForm
            setStep={setStep}
            phoneNumber={phoneNumber}
            setPhoneNumbber={setPhoneNumbber}
            isPending={isPending}
            sendOtpHandler={sendOtpHandler}
          />
        );

      case 2:
        return (
          <CheckOtpForm
            otpResponse={otpResponse}
            onResendOtp={sendOtpHandler}
            error={error}
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
