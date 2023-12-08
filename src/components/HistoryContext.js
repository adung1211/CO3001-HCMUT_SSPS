import React, { useState } from "react";
export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  const [idCount, setIdCount] = useState(3);
  const [History, setHistory] = useState([
    {
      id: 1,
      fileName: "TuyenTapThoTinh9x.pdf",
      printID: "666666",
      printDate: "1/1/2023",
      printPages: "69",
      location: "Dĩ An H1 - 305",
      paperSize: "A4",
    },
    {
      id: 2,
      fileName: "300BaiCodeThieuNhi.pdf",
      printID: "999999",
      printDate: "12/2/2023",
      printPages: "300",
      location: "Dĩ An H1 - 305",
      paperSize: "A4",
    },
    {
      id: 3,
      fileName: "CanhCaoHocVu.pdf",
      printID: "696969",
      printDate: "12/2/2023",
      printPages: "2",
      location: "LTK A2 - 201",
      paperSize: "A2",
    },
  ]);

  const updateHistory = (newHistory) => {
    setIdCount((curID) => curID + 1);
    setHistory((prevHistory) => [
      ...prevHistory,
      {
        id: idCount + 1,
        ...newHistory,
      },
    ]);
  };

  return (
    <HistoryContext.Provider value={{ History, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
