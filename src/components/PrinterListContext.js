// PrinterListContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const PrinterListContext = createContext();

export const usePrinterListContext = () => useContext(PrinterListContext);

const PrinterListProvider = ({ children }) => {
  const [printers, setPrinters] = useState(() =>{
    const storedPrinters = localStorage.getItem('printers');
    return storedPrinters ? JSON.parse(storedPrinters) :    [
      { id: 1, name: 'Printer 1', brand: 'Panasonic A ', location: 1, building: 'A3', room: ' 101', status: 'Online' },
      { id: 2, name: 'Printer 2', brand: 'Brand B',  location: 2, building: 'B4', room: ' 102', status: 'Offline' },
      { id: 3, name: 'Printer 3', brand: 'Brand C',  location: 1, building: 'A5', room: ' 103', status: 'Online' },
      { id: 4, name: 'Printer 4', brand: 'Brand D', location: 2, building: 'A4', room: ' 104', status: 'Offline' },
      { id: 5, name: 'Printer 5', brand: 'Brand E',  location: 1, building: 'H6', room: ' 105', status: 'Online' },
      { id: 6, name: 'Printer 6', brand: 'Brand F',  location: 2, building: 'B4', room: ' 106', status: 'Offline' },
      { id: 7, name: 'Printer 7', brand: 'Brand G',  location: 1, building: 'A5', room: ' 107', status: 'Online' },
      { id: 8, name: 'Printer 8', brand: 'Brand H', location: 2, building: 'C4', room: ' 108', status: 'Offline' },
      { id: 9, name: 'Printer 9', brand: 'Brand I',  location: 1, building: 'H1', room: ' 109', status: 'Online' },
      { id: 10, name: 'Printer 10', brand: 'Brand J',  location: 2, building: 'H3', room: ' 110', status: 'Offline' },
    ];
  });
  
  useEffect(() => {
    localStorage.setItem('printers', JSON.stringify(printers));
  }, [printers]);
  const addPrinter = (newPrinter) => {
    setPrinters((prevPrinters) => {
      const updatedPrinters = [...prevPrinters, newPrinter];
      localStorage.setItem('printers', JSON.stringify(updatedPrinters));
      return updatedPrinters;
    });
  };

  const removePrinter = (printerToRemove) => {
    setPrinters((prevPrinters) => prevPrinters.filter((printer) => printer.id !== printerToRemove.id));
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
      { id: 1, name: 'Printer 1', brand: 'Panasonic A ', location: 1, building: 'A3', room: ' 101', status: 'Online' },
      { id: 2, name: 'Printer 2', brand: 'Brand B',  location: 2, building: 'B4', room: ' 102', status: 'Offline' },
      { id: 3, name: 'Printer 3', brand: 'Brand C',  location: 1, building: 'A5', room: ' 103', status: 'Online' },
      { id: 4, name: 'Printer 4', brand: 'Brand D', location: 2, building: 'A4', room: ' 104', status: 'Offline' },
      { id: 5, name: 'Printer 5', brand: 'Brand E',  location: 1, building: 'H6', room: ' 105', status: 'Online' },
      { id: 6, name: 'Printer 6', brand: 'Brand F',  location: 2, building: 'B4', room: ' 106', status: 'Offline' },
      { id: 7, name: 'Printer 7', brand: 'Brand G',  location: 1, building: 'A5', room: ' 107', status: 'Online' },
      { id: 8, name: 'Printer 8', brand: 'Brand H', location: 2, building: 'C4', room: ' 108', status: 'Offline' },
      { id: 9, name: 'Printer 9', brand: 'Brand I',  location: 1, building: 'H1', room: ' 109', status: 'Online' },
      { id: 10, name: 'Printer 10', brand: 'Brand J',  location: 2, building: 'H3', room: ' 110', status: 'Offline' },
    ]);
  };
  return (
    <PrinterListContext.Provider value={{ printers, addPrinter, removePrinter, editPrinter, setPrinters, resetLocalStorage }}>
      {children}
    </PrinterListContext.Provider>
  );
};

export default PrinterListProvider;