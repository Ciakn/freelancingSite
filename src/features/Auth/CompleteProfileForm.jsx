import React, { useState } from "react";
import Input from "../../ui/Input";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { CompleteProfile } from "../../services/authService";
import toast from "react-hot-toast";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: CompleteProfile,
  });
  const handleSubmit = async (e) => {
    console.log("s");
    e.preventDefault();
    try {
      const { message } = await mutateAsync({ name, role, email });
      console.log("send");
      toast.success(message);
    } catch (error) {}
  };
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div className=" w-full sm:max-w-sm ">
        <form onSubmit={handleSubmit} className="space-y-8">
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
              onChange={(e) => setRole(e.target.value)}
              checked={role === "FREELANCER"}
            />
          </div>
          <RadioInput
            type="radio"
            value="OWNER"
            name="role"
            id="OWNER"
            label={"کارفرما"}
            onChange={(e) => setRole(e.target.value)}
            checked={role === "OWNER"}
          />
          <button className="btn btn--primary w-full">تایید</button>
        </form>
      </div>
    </div>
  );
};

export default CompleteProfileForm;
