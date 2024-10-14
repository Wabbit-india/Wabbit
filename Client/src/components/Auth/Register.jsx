import React, { useContext } from 'react'
import { Mycontext } from '../../context/Mycontext'
import Content from './Register Steps/Content';
import RegisterStep1 from "./Register Steps/RegisterStep1"

const Register = () => {
    const {setcreateAccount,RegisterStep} = useContext(Mycontext)
  return (
    <div className="w-[80%] 2xl:w-[70%] h-[100%] flex flex-col pt-[10%] pb-[5%] font-nunito gap-5">
   {RegisterStep == 0 && <Content/>}
   {RegisterStep == 1 && <RegisterStep1/>}
  </div>
  )
}

export default Register
