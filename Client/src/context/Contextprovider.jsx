import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
  const [isnavbar, setIsnavbar] = useState(false);
  const [isutilnavbar, setIsutilnavbar] = useState(false);
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
  const [newModal, setnewModal] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [activeComponent, setActiveComponent] = useState(1);
  const [ispeofile, setprofile] = useState(false)
  const [activeId, setActiveId] = useState(1);
  const [imagePreview, setImagePreview] = useState(null);
  const [userData, setUserData] = useState({
    freelancerType: "",
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
    profilePicture: "",
    description: "",
    region: "",
    city: "",
    languages: [],
    skills: [],
  });
  const [profileData1, setProfileData1] = useState({
    occuption: "",
    fromdate: "",
    todate: "",
    skillschoose: "",
    skillswork: "",
    university: "",
    portfoliolinks: "",
  })

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {

      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "ProfilePhoto");
      data.append("cloud_name", "dvnrzuumg");

      try {
        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dvnrzuumg/image/upload",
          {
            method: "POST",
            body: data,
          }
        );

        if (!res.ok) throw new Error("Failed to upload image");

        const result = await res.json();

        setImageUrl(result.url);


      } catch (error) {
        console.error("Error uploading the image:", error.message);
      }
    }
  };


  return (
    <Mycontext.Provider
      value={{
        profileData1, setProfileData1,
        profileData,
        setProfileData,
        isnavbar,
        setIsnavbar,
        isutilnavbar,
        setIsutilnavbar,
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
        newModal,
        setnewModal,
        imageUrl,
        setImageUrl,
        activeId,
        setActiveId,
        activeComponent,
        setActiveComponent,
        imagePreview,
        setImagePreview,
        handleFileChange,
        ispeofile,
        setprofile
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};
