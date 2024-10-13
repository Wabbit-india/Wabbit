import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
    const [isnavbar, setIsnavbar] = useState(false);
    const [isModal , setIsModal] = useState(false);
    const [createAccount, setcreateAccount] = useState(false);
    
    return (
        <Mycontext.Provider value={{ isnavbar, setIsnavbar,isModal , setIsModal,createAccount, setcreateAccount }}>
            {children}
        </Mycontext.Provider>
    );  
};