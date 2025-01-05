import React, { useContext } from 'react'

import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,FaApple } from "react-icons/fa";
import { Mycontext } from '../../../context/Mycontext';

const Content = () => {
    
  const {setcreateAccount, setLoginStep} = useContext(Mycontext)
  return (
    <>
      <div className="flex flex-col  gap-3 h-[20%]">
        <div className="text-[22px] md:text-3xl text-start font-nunito font-bold">
          Sign in to your account
        </div>
        <div className="text-[20px] md:text-xl text-start font-nunito">
          Don’t have an account?
          <span className=" underline underline-offset-2 text-maincolor cursor-pointer" onClick={()=>{setcreateAccount(true)}}>
            Join here
          </span>
        </div>
      </div>

      <div className="h-[60%] flex flex-col overflow-hidden gap-3">
        <div className="py-2 text-center w-full cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%]">
          <FcGoogle className="text-[16px] " />
          <p className="text-[16px]">Continue With Google</p>
        </div>
        <div className="py-2 text-center w-full cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%]" onClick={()=>{setLoginStep(1)}}>
          <MdEmail className="text-[16px]"/>
          <p className="text-[16px]">Continue With Username/Email</p>
        </div>
        <div className="text-center text-[14px] font-bold text-gray-400">OR</div>
        <div className="w-full flex flex-row items-center justify-between">
        <div className="py-2 text-center w-[49%] cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%]">
          <FaApple className="text-[16px]"/>
          <p className="text-[16px]">Apple</p>
        </div>
        <div className="py-2 text-center w-[49%] cursor-pointer border rounded-xl border-[rgb(0,0,0,0.2)] font-bold flex-row flex items-center justify-center gap-[5%]">
          <FaFacebookF className="text-blue-700 text-[16px]"/>
          <p className="text-[16px]">Facebook</p>
        </div>
        </div>
       
      </div>

      <div className="w-full h-[20%] text-[12px] ">
      By joining, you agree to the Wabbit <a href="" className="underline">Terms of Service</a> and to occasionally receive emails from us. Please read our <a href="" className="underline">Privacy Policy</a> to learn how we use your personal data.
      </div>
    </>
  )
}

export default Content
