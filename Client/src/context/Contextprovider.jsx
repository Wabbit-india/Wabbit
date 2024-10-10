import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
    const [isnavbar, setIsnavbar] = useState(true);
    const [isModal , setIsModal] = useState(false)
    
    return (
        <Mycontext.Provider value={{ isnavbar, setIsnavbar,isModal , setIsModal }}>
            {children}
        </Mycontext.Provider>
    );  
};