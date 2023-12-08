import React, { createContext, useContext, useState } from "react";

const PrintContext = createContext();

export const PrintProvider = ({ children }) => {
  const [printingInfo, setPrintingInfo] = useState({
    fileName: "",
    doubleSided: false,
    paperSize: "A4",
    printerId: "",
    printerName: "",
    printerLocation: "",
    orientation: "In dọc",
    printID: "",
    printDate: "",
    printPages: "",
  });

  const updatePrintingInfo = (newPrintingInfo) => {
    setPrintingInfo((prevPrintingInfo) => ({
      ...prevPrintingInfo,
      ...newPrintingInfo,
    }));
  };

  return (
    <PrintContext.Provider value={{ printingInfo, updatePrintingInfo }}>
      {children}
    </PrintContext.Provider>
  );
};

// Custom hook to use the PrintContext in components
export const usePrintContext = () => {
  const context = useContext(PrintContext);
  if (!context) {
    throw new Error("usePrintContext must be used within a PrintProvider");
  }
  return context;
};
