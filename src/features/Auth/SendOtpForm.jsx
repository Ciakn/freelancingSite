import React, { useState } from "react";
import Input from "../../ui/Input";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import Loader from "../../ui/Loader";

const SendOtpForm = ({ isPending, phoneNumber, onChange, sendOtpHandler }) => {
  return (
    <div>
      <form className="space-y-5" onSubmit={sendOtpHandler}>
        <Input
          label={"شماره مبایل"}
          value={phoneNumber}
          onChange={onChange}
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
