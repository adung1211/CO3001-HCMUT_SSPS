import React, { useState, useEffect } from "react";

export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  // Retrieve idCount and History from sessionStorage
  const storedIdCount = sessionStorage.getItem("idCount");
  const storedHistory = JSON.parse(sessionStorage.getItem("History"));

  const [idCount, setIdCount] = useState(
    storedIdCount ? parseInt(storedIdCount) : 3
  );
  const [History, setHistory] = useState(
    storedHistory || [
      // Your default history items
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
    ]
  );

  // Update sessionStorage whenever idCount or History changes
  useEffect(() => {
    sessionStorage.setItem("idCount", idCount);
    sessionStorage.setItem("History", JSON.stringify(History));
  }, [idCount, History]);

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
