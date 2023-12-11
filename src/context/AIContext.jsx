/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AiContext = createContext();

export const AiProvider = ({ children }) => {
    const [isAI,setIsAI] = useState(null);
  
    return (
      <AiContext.Provider value={{ isAI, setIsAI }}>
        {children}
      </AiContext.Provider>
    );
  };