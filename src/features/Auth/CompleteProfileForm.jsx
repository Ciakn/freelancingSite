import React, { useState } from "react";
import Input from "../../ui/Input";
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
            <div className="flex justify-center items-center gap-x-2 text-secondary-600">
              <label htmlFor="FREELANCER">فریلنسر</label>{" "}
              <input
                className="cursor-pointer focus:ring-0 form-radio text-red-500 "
                type="radio"
                id="FREELANCER"
                value="FREELANCER"
                name="role"
              />
            </div>
            <div className="flex justify-center items-center gap-x-2 text-secondary-600">
              <label htmlFor="OWNER">کارفرما </label>
              <input
                className="cursor-pointer focus:ring-0 form-radio text-red-500 "
                type="radio"
                name="role"
                value="OWNER"
                id="OWNER"
              />
            </div>
          </div>
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
