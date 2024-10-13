import React, { useContext } from "react";
import Content from "./Login Steps/Content";

const Login = () => {
  return (
    <div className="w-[90%] 2xl:w-[80%] h-[100%] flex flex-col pt-[10%] pb-[5%] font-nunito gap-5">
      <Content/>
    </div>
  );
};

export default Login;
