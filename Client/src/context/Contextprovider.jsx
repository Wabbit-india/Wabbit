import { useState } from "react";
import { Mycontext } from "./Mycontext";

export const Contextprovider = ({ children }) => {
    const [isnavbar, setIsnavbar] = useState(true);
    
    return (
        <Mycontext.Provider value={{ isnavbar, setIsnavbar }}>
            {children}
        </Mycontext.Provider>
    );  
};