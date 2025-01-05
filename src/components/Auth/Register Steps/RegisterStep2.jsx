import React, { useContext } from "react";
import { Mycontext } from "../../../context/Mycontext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const RegisterStep2 = () => {
  const navigate = useNavigate();
  const {
    setRegisterStep,
    registerEmail,
    setRegisterEmail,
    registerPassword,
    setRegisterPassword,
    registerUsername,
    setRegisterUsername,
    setIsModal,
    setcreateAccount,
    setLoginStep,
  } = useContext(Mycontext);

  const register = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: registerEmail,
          password: registerPassword,
          username: registerUsername,
        }),
      });
      const result = await response.json();
      console.log(result);
      const token = result.authToken;
      localStorage.setItem("token", token);
      localStorage.setItem("_id", result._id);
      localStorage.setItem("username", result.username);
      setRegisterUsername("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterStep(0);
      setcreateAccount(false);
      setLoginStep(0);
      setIsModal(false);
      navigate("/userInfo");
    } catch (error) {
      console.log(error);
      console.log("an error occured in registering");
    }
  };

  return (
    <div className="flex flex-col  gap-3 h-[100%]">
      <div className="absolute top-6">
        <button
          className="text-start font-bold text-sm flex gap-2 flex-row items-center justify-start"
          onClick={() => {
            setRegisterStep(1);
          }}
        >
          <FaArrowLeftLong />
          Back
        </button>
      </div>

      <form className="h-[85%] flex flex-col gap-3" onSubmit={register}>
        <div className="text-[22px] md:text-3xl text-start font-nunito font-bold">
          Get your profile started{" "}
        </div>
        <div className="text-[16px] text-gray-600">
          Add a username that's unique to you, this is how you'll appear to
          others.
        </div>
        <div className="text-[16px] text-gray-600 font-bold">
          You can't change your username, so choose wisely.
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <label htmlFor="username" className="font-bold w-fit">
            Choose a username
          </label>
          <div className="relative h-auto">
            <input
              type="text"
              id="username"
              placeholder="username"
              value={registerUsername}
              onChange={(e) => {
                setRegisterUsername(e.target.value);
              }}
              className="border rounded-lg py-2 px-3 pr-10 border-[rgb(0,0,0,0.2)] w-full focus:outline-[rgb(0,0,0,0.5)]"
            />
          </div>
        </div>
        <button
          disabled={
            registerEmail.length === 0 &&
            registerPassword.length === 0 &&
            registerUsername.length === 0
              ? true
              : false
          }
          type="submit"
          className="py-3 text-center w-full cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%] bg-black mt-6"
        >
          <p className="text-[16px] text-white">Continue</p>
        </button>
      </form>
    </div>
  );
};

export default RegisterStep2;
