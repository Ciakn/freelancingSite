import React, { useState } from "react";
import Input from "../../ui/Input";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

const SendOtpForm = ({setStep}) => {
  const [phoneNumber, setPhoneNumbber] = useState("");
  const { isPending, error, data, mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ phoneNumber });
      toast.success(data.message);
      setStep(2)
    } catch (error) {
      toast.error("خطایی رخ داده", error?.response?.data?.message);
    }
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
        <div>
          {isPending ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SendOtpForm;
