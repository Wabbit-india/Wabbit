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
  const [getInfostep, setgetInfostep] = useState(1);
  const [freelance, setfreelance] = useState(false);
  const [normaluser, setnormaluser] = useState(false);
  const [userData, setUserData] = useState({
    freelancerType: "buying",
    freelancingPurpose: [],
    companySize: "",
    purpose: "",
    sellingPurpose: "",
    experienceMode: "",
  });

  const [faqQuestion, setfaqQuestion] = useState(1);
  const [progressbar, setprogressbar] = useState(16.66);
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    profilePicture:"",
    description: "",
    region: "",
    city: "",
    languages: [],
    skills: [],
});
const [profileData1,setProfileData1]=useState({
  occuption: "",
  fromdate: "",
  todate: "",
  skillschoose: "",
  skillswork: "",
  university: "",
  portfoliolinks: "",
})

  return (
    <Mycontext.Provider
      value={{
        profileData1,setProfileData1,
        profileData,
        setProfileData,
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
        freelance,
        setfreelance,
        normaluser,
        setnormaluser,
        getInfostep,
        setgetInfostep,
        userData,
        setUserData,
        faqQuestion,
        setfaqQuestion,
        progressbar,
        setprogressbar,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};
