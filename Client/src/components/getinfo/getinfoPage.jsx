import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NormalUserstep1 from "./normalUserComponents/normalUser1";
import { Mycontext } from "../../context/Mycontext";
import RegisterStep4_freelancePage from "./freelacerPages/freelancePage1";
import RegisterStep4_normal from "./normalUserComponents/normalUser2_normal";
import NormalUserstep3 from "./normalUserComponents/normalUser3";
import NormalUser4 from "./normalUserComponents/NormalUser4";
import FreelancePage2 from "./freelacerPages/freelancePage2";
import FreelancePage3 from "./freelacerPages/FreelancePage3";

const GetinfoPage = () => {
  const { getInfostep, freelance, normaluser } = useContext(Mycontext);
  const navigate = useNavigate();

  useEffect(() => {
    const userType = localStorage.getItem("userType");
    if (userType) {
      navigate("/"); // Redirect to home if userType is found
    }
  }, [navigate]);

  return (
    <div className="w-full h-lvh grid place-content-center">
      <div className="w-lvw h-lvh lg:rounded-3xl lg:w-[900px] lg:h-[600px] relative border-4 p-10">
        {getInfostep === 1 && <NormalUserstep1 />}
        {getInfostep === 2 && freelance && <RegisterStep4_freelancePage />}
        {getInfostep === 3 && freelance && <FreelancePage2 />}
        {getInfostep === 4 && freelance && <FreelancePage3 />}
        {getInfostep === 2 && normaluser && <RegisterStep4_normal />}
        {getInfostep === 3 && normaluser && <NormalUserstep3 />}
        {getInfostep === 4 && normaluser && <NormalUser4 />}
      </div>
    </div>
  );
};

export default GetinfoPage;
