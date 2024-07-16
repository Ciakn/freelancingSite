import React, { useState } from "react";
import Input from "../../ui/Input";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center">
      <div className=" w-full sm:max-w-sm ">
        <form className="space-y-8">
          <Input
            label={"نام و نام خانوادگی"}
            name={"name"}
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            value={name}
          />
          <Input
            label={"ایمیل"}
            name={email}
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <button className="btn btn--primary w-[30%]">تایید</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
