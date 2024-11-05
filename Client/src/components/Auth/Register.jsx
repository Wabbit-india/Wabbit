import React, { useContext } from "react";
import { Mycontext } from "../../context/Mycontext";
import Content from "./Register Steps/Content";
import RegisterStep1 from "./Register Steps/RegisterStep1";
import RegisterStep2 from "./Register Steps/RegisterStep2";

const Register = () => {
  const { setcreateAccount, RegisterStep,freelance, normaluser} = useContext(Mycontext);
  return (
    <div className="w-[80%] 2xl:w-[70%] h-[100%] flex flex-col pt-[10%] pb-[5%] font-nunito gap-5">
      {RegisterStep == 0 && <Content />}
      {RegisterStep == 1 && <RegisterStep1 />}
      {RegisterStep == 2 && <RegisterStep2 />}
    </div>
  );
};

export default Register;
