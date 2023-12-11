// PrinterListContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const PrinterListContext = createContext();

export const usePrinterListContext = () => useContext(PrinterListContext);

const PrinterListProvider = ({ children }) => {
  const [printers, setPrinters] = useState(() => {
    const storedPrinters = localStorage.getItem("printers");
    return storedPrinters
      ? JSON.parse(storedPrinters)
      : [
          {
            id: 1,
            name: "Brother HL",
            location: "Lý Thường Kiệt",
            building: "A2",
            room: " 101",
            status: "Sẵn sàng",
          },
          {
            id: 2,
            name: "Canon PIXMA",
            location: "Lý Thường Kiệt",
            building: "B3",
            room: " 102",
            status: "Không sẵn sàng",
          },
          {
            id: 3,
            name: "Dell E525W",
            location: "Lý Thường Kiệt",
            building: "B3",
            room: " 103",
            status: "Không sẵn sàng",
          },
          {
            id: 4,
            name: "Samsung Xpress",
            location: "Lý Thường Kiệt",
            building: "C4",
            room: " 104",
            status: "Không sẵn sàng",
          },
          {
            id: 5,
            name: "Xerox Phaser",
            location: "Dĩ An",
            building: "H6",
            room: " 105",
            status: "Sẵn sàng",
          },
          {
            id: 6,
            name: "Lexmark  CX",
            location: "Lý Thường Kiệt",
            building: "B3",
            room: " 106",
            status: "Không sẵn sàng",
          },
          {
            id: 7,
            name: "Ricoh SP ",
            location: "Lý Thường Kiệt",
            building: "C4",
            room: " 107",
            status: "Sẵn sàng",
          },
          {
            id: 8,
            name: "Kyocera Ecosys",
            location: "Lý Thường Kiệt",
            building: "C4",
            room: " 108",
            status: "Không sẵn sàng",
          },
          {
            id: 9,
            name: "HP LaserJet",
            location: "Dĩ An",
            building: "H1",
            room: " 109",
            status: "Sẵn sàng",
          },
          {
            id: 10,
            name: "Epson EcoTank",
            location: "Dĩ An",
            building: "H3",
            room: " 110",
            status: "Không sẵn sàng",
          },
          {
            id: 11,
            name: "Epson EcoTank",
            location: "Lý Thường Kiệt",
            building: "A2",
            room: " 201",
            status: "Sẵn sàng",
          },
          {
            id: 12,
            name: "Kyocera Ecosys",
            location: "Lý Thường Kiệt",
            building: "B3",
            room: " 202",
            status: "Sẵn sàng",
          },
          {
            id: 13,
            name: "HP LaserJet",
            location: "Lý Thường Kiệt",
            building: "C4",
            room: " 205",
            status: "Không sẵn sàng",
          },
          {
            id: 14,
            name: "Dell E525W",
            location: "Lý Thường Kiệt",
            building: "C4",
            room: " 301",
            status: "Sẵn sàng",
          },
          {
            id: 15,
            name: "Dell E525W",
            location: "Dĩ An",
            building: "H6",
            room: " 110",
            status: "Sẵn sàng",
          },
          {
            id: 16,
            name: "Raucon FC",
            location: "Dĩ An",
            building: "H2",
            room: " 110",
            status: "Sẵn sàng",
          },
          {
            id: 17,
            name: "Sita rau",
            location: "Dĩ An",
            building: "H1",
            room: " 202",
            status: "Sẵn sàng",
          },
          {
            id: 18,
            name: "Ricon Pen",
            location: "Dĩ An",
            building: "H3",
            room: " 209",
            status: "Không sẵn sàng",
          },
          {
            id: 19,
            name: "HP LaserJet",
            location: "Dĩ An",
            building: "H2",
            room: " 201",
            status: "Không sẵn sàng",
          },
          {
            id: 20,
            name: "IPrint XPlus",
            location: "Dĩ An",
            building: "H1",
            room: " 601",
            status: "Sẵn sẵn sàng",
          },
        ];
  });

  useEffect(() => {
    sessionStorage.clear();
    localStorage.setItem("printers", JSON.stringify(printers));
  }, [printers]);
  const addPrinter = (newPrinter) => {
    setPrinters((prevPrinters) => {
      const updatedPrinters = [...prevPrinters, newPrinter];
      localStorage.setItem("printers", JSON.stringify(updatedPrinters));
      return updatedPrinters;
    });
  };

  const removePrinter = (printerToRemove) => {
    setPrinters((prevPrinters) =>
      prevPrinters.filter((printer) => printer.id !== printerToRemove.id)
    );
    updateLocalStorage();
  };

  const editPrinter = (updatedPrinter) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) =>
        printer.id === updatedPrinter.id ? updatedPrinter : printer
      )
    );

    // Cập nhật thông tin trong localStorage
    updateLocalStorage();
  };
  const updateLocalStorage = () => {
    localStorage.setItem("printers", JSON.stringify(printers));
  };
  return (
    <PrinterListContext.Provider
      value={{
        printers,
        addPrinter,
        removePrinter,
        editPrinter,
        setPrinters,
      }}
    >
      {children}
    </PrinterListContext.Provider>
  );
};

export default PrinterListProvider;
