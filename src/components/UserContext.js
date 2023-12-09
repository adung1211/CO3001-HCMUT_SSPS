import React, { useState, useEffect } from "react";

export const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  // Retrieve state from sessionStorage
  const storedState = JSON.parse(sessionStorage.getItem("userState"));

  const [state, setState] = useState(
    storedState || {
      log: "none",
    }
  );

  // Update sessionStorage whenever state changes
  useEffect(() => {
    sessionStorage.setItem("userState", JSON.stringify(state));
  }, [state]);

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
