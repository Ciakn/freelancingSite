import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import http from "../../services/httpServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowCircleLeft } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
const RESEND_TIME = 10;

const CheckOtpForm = ({ phoneNumber, onBack, otpResponse, onResendOtp }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [time, setTime] = useState(RESEND_TIME);
  const { mutateAsync, isPending, error, data } = useMutation({
    mutationFn: checkOtp,
  });

  const checkOtpHandler = async (e) => {
    e.preventDefault();

    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast.error("پروفایل شما در دست بررسی است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error("خطایی رخ داده", error?.response?.data?.message);
    }
  };
  useEffect(() => {
    const otpTimer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
    return () => {
      if (otpTimer) {
        clearInterval(otpTimer);
      }
    };
  }, [time]);
  return (
    <div>
      <button onClick={onBack}>
        {" "}
        <HiArrowCircleLeft className="w-6 h-6 text-secondary-600" />{" "}
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          {otpResponse?.message}
          <button onClick={onBack}>
            <CiEdit />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p> تا ارسال مجدد کد {time}</p>
        ) : (
          <button onClick={onResendOtp}>ارسال مجدد کد</button>
        )}
      </div>
      <form className="space-y-5" onSubmit={checkOtpHandler}>
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
        <button type="submit" className="btn btn--primary w-full">
          {" "}
          تایید
        </button>
      </form>
    </div>
  );
};

export default CheckOtpForm;
