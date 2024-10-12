import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
    const [isnavbar, setIsnavbar] = useState(false);
    const [isModal , setIsModal] = useState(false)
    
    return (
        <Mycontext.Provider value={{ isnavbar, setIsnavbar,isModal , setIsModal }}>
            {children}
        </Mycontext.Provider>
    );  
};