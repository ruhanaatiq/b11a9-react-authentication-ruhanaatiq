import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [balance, setBalance] = useState(10000); // starting balance

  return (
    <UserContext.Provider value={{ balance, setBalance }}>
      {children}
    </UserContext.Provider>
  );
};
