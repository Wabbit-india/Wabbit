import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
  const [isnavbar, setIsnavbar] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [createAccount, setcreateAccount] = useState(false);
  const [LoginStep, setLoginStep] = useState(0);
  const [RegisterStep, setRegisterStep] = useState(0);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerUsername, setRegisterUsername] = useState("");

  return (
    <Mycontext.Provider
      value={{
        isnavbar,
        setIsnavbar,
        isModal,
        setIsModal,
        createAccount,
        setcreateAccount,
        LoginStep,
        setLoginStep,
        RegisterStep,
        setRegisterStep,
        registerEmail,
        setRegisterEmail,
        registerPassword,
        setRegisterPassword,
        registerUsername,
        setRegisterUsername,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};
