import React from "react";
import SendOtpForm from "../features/Auth/SendOtpForm";
import CheckOtpForm from "../features/Auth/CheckOtpForm";
import AuthContainer from "../features/Auth/AuthContainer";

const Auth = () => {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex flex-col w-full h-[70vh] justify-center items-center">
        <h1 className="font-bold text-[24px]">سایت فریلنسر</h1>
        <div className="w-full sm:mx-w-md">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
};

export default Auth;
