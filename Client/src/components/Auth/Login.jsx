import React, { useContext } from "react";
import Content from "./Login Steps/Content";
import { Mycontext } from "../../context/Mycontext";
import LoginStep1 from "./Login Steps/LoginStep1";

const Login = () => {
  const {LoginStep, setLoginStep} = useContext(Mycontext);
  return (
    <div className="w-[80%] 2xl:w-[70%] h-[100%] flex flex-col pt-[10%] pb-[5%] font-nunito gap-5 ">
      {LoginStep == 0 &&<Content/>}
      {LoginStep == 1 && <LoginStep1/>}
    </div>
  );
};

export default Login;
