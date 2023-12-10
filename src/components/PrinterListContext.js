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
            location: "Dĩ An",
            building: "A2",
            room: " 101",
            status: "Sẵn sàng",
          },
          {
            id: 2,
            name: "Canon PIXMA",
            location: "Dĩ An",
            building: "B3",
            room: " 102",
            status: "Không sẵn sàng",
          },
          {
            id: 3,
            name: "Dell E525W",
            location: "Lý Thường Kiệt",
            building: "A2",
            room: " 103",
            status: "Không sẵn sàng",
          },
          {
            id: 4,
            name: "Samsung Xpress",
            location: "Dĩ An",
            building: "A2",
            room: " 104",
            status: "Không sẵn sàng",
          },
          {
            id: 5,
            name: "Xerox Phaser",
            location: "Lý Thường Kiệt",
            building: "H6",
            room: " 105",
            status: "Sẵn sàng",
          },
          {
            id: 6,
            name: "Lexmark  CX",
            location: "Dĩ An",
            building: "B3",
            room: " 106",
            status: "Không sẵn sàng",
          },
          {
            id: 7,
            name: "Ricoh SP ",
            location: "Lý Thường Kiệt",
            building: "A2",
            room: " 107",
            status: "Sẵn sàng",
          },
          {
            id: 8,
            name: "Kyocera Ecosys",
            location: "Dĩ An",
            building: "C4",
            room: " 108",
            status: "Không sẵn sàng",
          },
          {
            id: 9,
            name: "HP LaserJet",
            location: "Lý Thường Kiệt",
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
  const resetLocalStorage = () => {
    localStorage.removeItem("printers");
    setPrinters([
      {
        id: 1,
        name: "Brother HL",
        location: "Dĩ An",
        building: "A2",
        room: " 101",
        status: "Sẵn sàng",
      },
      {
        id: 2,
        name: "Canon PIXMA",
        location: "Dĩ An",
        building: "B3",
        room: " 102",
        status: "Không sẵn sàng",
      },
      {
        id: 3,
        name: "Dell E525W",
        location: "Lý Thường Kiệt",
        building: "A2",
        room: " 103",
        status: "Không sẵn sàng",
      },
      {
        id: 4,
        name: "Samsung Xpress",
        location: "Dĩ An",
        building: "A2",
        room: " 104",
        status: "Không sẵn sàng",
      },
      {
        id: 5,
        name: "Xerox Phaser",
        location: "Lý Thường Kiệt",
        building: "H6",
        room: " 105",
        status: "Sẵn sàng",
      },
      {
        id: 6,
        name: "Lexmark  CX",
        location: "Dĩ An",
        building: "B3",
        room: " 106",
        status: "Không sẵn sàng",
      },
      {
        id: 7,
        name: "Ricoh SP ",
        location: "Lý Thường Kiệt",
        building: "A2",
        room: " 107",
        status: "Sẵn sàng",
      },
      {
        id: 8,
        name: "Kyocera Ecosys",
        location: "Dĩ An",
        building: "C4",
        room: " 108",
        status: "Không sẵn sàng",
      },
      {
        id: 9,
        name: "HP LaserJet",
        location: "Lý Thường Kiệt",
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
    ]);
  };
  return (
    <PrinterListContext.Provider
      value={{
        printers,
        addPrinter,
        removePrinter,
        editPrinter,
        setPrinters,
        resetLocalStorage,
      }}
    >
      {children}
    </PrinterListContext.Provider>
  );
};

export default PrinterListProvider;
