import React, { useState } from "react";
export const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    log: "none",
  });

  const logAsStudent = () => {
    setState({ log: "student" });
  };

  const logOut = () => {
    setState({ log: "none" });
  };

  const ContextData = { state, logAsStudent, logOut };

  return (
    <UserContext.Provider value={ContextData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
