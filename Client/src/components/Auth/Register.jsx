import React, { useContext } from 'react'
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF,FaApple } from "react-icons/fa";
import { Mycontext } from '../../context/Mycontext'
import Content from './Register Steps/Content';

const Register = () => {
    const {setcreateAccount} = useContext(Mycontext)
  return (
    <div className="w-[90%] 2xl:w-[80%] h-[100%] flex flex-col pt-[10%] pb-[5%] font-nunito gap-5">
   <Content/>
  </div>
  )
}

export default Register
