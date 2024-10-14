import React, { useContext, useState } from "react";
import { Mycontext } from "../../../context/Mycontext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";

const LoginStep1 = () => {
  const { setLoginStep } = useContext(Mycontext);
  const [show, setshow] = useState(false);
  return (
    <div className="flex flex-col  gap-3 h-[100%]">
      <div className="absolute top-6">

      <button
        className="text-start font-bold text-sm flex gap-2 flex-row items-center justify-start"
        onClick={() => {
          setLoginStep(0);
        }}
        >
        <FaArrowLeftLong />
        Back
      </button>
        </div>

      <form className="h-[85%] flex flex-col gap-3" onSubmit="">
        <div className="text-[22px] md:text-3xl text-start font-nunito font-bold">
          Continue with your email or username{" "}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-bold w-fit">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@email.com"
            className="border rounded-lg py-2 px-3 pr-10 border-[rgb(0,0,0,0.2)] focus:outline-[rgb(0,0,0,0.5)] "
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="font-bold w-fit">
            Password
          </label>
          <div className="relative h-auto">
            <input
              type={show ? "text" : "password"}
              id="password"
              placeholder="passowrd"
              className="border rounded-lg py-2 px-3 pr-10 border-[rgb(0,0,0,0.2)] w-full focus:outline-[rgb(0,0,0,0.5)]"
            />
            {!show ? (
              <FaRegEyeSlash
                className="absolute top-[35%] right-3 cursor-pointer text-lg"
                onClick={() => setshow(true)}
              />
            ) : (
              <FaRegEye
                className="absolute top-[35%] right-3 cursor-pointer text-lg"
                onClick={() => {
                  setshow(false);
                }}
              />
            )}
          </div>
        </div>
        <div className="text-end underline cursor-pointer text-maincolor hover:transition">
          Forgot Password?
        </div>
        <button disabled className="py-3 text-center w-full cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%] bg-black">
          <p className="text-[16px] text-white">Continue</p>
        </button>
      </form>
      
      <div className="w-full h-[20%] text-[12px]">
        By joining, you agree to the Wabbit{" "}
        <a href="" className="underline">
          Terms of Service
        </a>{" "}
        and to occasionally receive emails from us. Please read our{" "}
        <a href="" className="underline">
          Privacy Policy
        </a>{" "}
        to learn how we use your personal data.
      </div>
    </div>
  );
};

export default LoginStep1;
