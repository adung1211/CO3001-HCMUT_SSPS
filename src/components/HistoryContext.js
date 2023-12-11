import React, { useState, useEffect } from "react";

export const HistoryContext = React.createContext();

const HistoryProvider = ({ children }) => {
  // Retrieve idCount and History from sessionStorage
  const storedIdCount = sessionStorage.getItem("idCount");
  const storedHistory = JSON.parse(sessionStorage.getItem("History"));

  const [idCount, setIdCount] = useState(
    storedIdCount ? parseInt(storedIdCount) : 4
  );
  const [History, setHistory] = useState(
    storedHistory || [
      // Your default history items
      {
        id: 1,
        fileName: "TuyenTapThoTinh9x.pdf",
        printID: "666666",
        printDate: "11/12/2022 22:13",
        printPages: "69",
        location: "Dĩ An H1 - 305",
        paperSize: "A4",
        printerID: "2",
      },
      {
        id: 2,
        fileName: "300BaiCodeThieuNhi.pdf",
        printID: "999999",
        printDate: "12/11/2023 01:10",
        printPages: "300",
        location: "Dĩ An H1 - 305",
        paperSize: "A4",
        printerID: "4",
      },
      {
        id: 3,
        fileName: "CanhCaoHocVu.pdf",
        printID: "696969",
        printDate: "14/2/2023 07:00",
        printPages: "2",
        location: "Lý Thường Kiệt A2 - 201",
        paperSize: "A2",
        printerID: "6",
      },
      {
        id: 4,
        fileName: "MauDonXinThoiHoc.word",
        printID: "231231",
        printDate: "11/12/2023 08:00",
        printPages: "10",
        location: "Dĩ An H6 - 608",
        paperSize: "A4",
        printerID: "10",
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
