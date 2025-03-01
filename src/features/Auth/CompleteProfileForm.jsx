import React, { useState } from "react";
import Input from "../../ui/Input";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { CompleteProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CompleteProfileForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const { isPending, data, mutateAsync } = useMutation({
    mutationFn: CompleteProfile,
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ name, email, role });
      if (user.status !== 2) {
        navigate("/");
        toast.success("پروفایل شما در دست بررسی است");
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      console.log(error);
      toast.error("خطایی رخ داده", error);
    }
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
