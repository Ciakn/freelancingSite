import React, { useState } from "react";
import Input from "../../ui/Input";
import RadioInput from "../../ui/RadioInput";
const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div className="flex justify-center items-center h-[100vh] ">
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
          <div className="flex justify-center gap-5 items-center">
            <RadioInput
              type="radio"
              value="FREELANCER"
              name="role"
              id="FREELANCER"
              label={"فریلنسر"}
              onChange={""}
            />
          </div>
          <RadioInput
            type="radio"
            value="OWNER"
            name="role"
            id="OWNER"
            label={"کارفرما"}
            onChange={""}
          />
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
