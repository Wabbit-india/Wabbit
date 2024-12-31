import React, { useState, createContext } from "react";

// Create the context
export const Mycontexts = createContext(null);

export const Contextprovider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    profilePicture: "",
    description: "",
    language: [],
  });

  return (
    <Mycontext.Provider value={{ profileData, setProfileData }}>
      {children}
    </Mycontext.Provider>
  );
};
