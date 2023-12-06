import React, { useState } from "react";
export const UserContext = React.createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    log: "none",
  });

  const logAsStudent = () => {
    setState({ log: "student" });
  };

  const logAsSPSO = () => {
    setState({ log: "spso" });
  };

  const logOut = () => {
    setState({ log: "none" });
  };

  const ContextData = { state, logAsStudent, logAsSPSO, logOut };

  return (
    <UserContext.Provider value={ContextData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
