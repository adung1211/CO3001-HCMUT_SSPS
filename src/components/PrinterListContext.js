// PrinterListContext.js
import React, { createContext, useContext, useState } from 'react';

const PrinterListContext = createContext();

export const usePrinterListContext = () => useContext(PrinterListContext);

const PrinterListProvider = ({ children }) => {
  const [printers, setPrinters] = useState([
    { id: 1, name: 'Printer 1', brand: 'Brand A', type: 'Type A', location: 1, building: 'A3', room: ' 101', status: 'Online' },
    { id: 2, name: 'Printer 2', brand: 'Brand B', type: 'Type B', location: 2, building: 'B4', room: ' 102', status: 'Offline' },
    { id: 3, name: 'Printer 3', brand: 'Brand C', type: 'Type C', location: 1, building: 'A5', room: ' 103', status: 'Online' },
    { id: 4, name: 'Printer 4', brand: 'Brand D', type: 'Type D', location: 2, building: 'A4', room: ' 104', status: 'Offline' },
    { id: 5, name: 'Printer 5', brand: 'Brand E', type: 'Type E', location: 1, building: 'H6', room: ' 105', status: 'Online' },
    { id: 6, name: 'Printer 6', brand: 'Brand F', type: 'Type F', location: 2, building: 'B4', room: ' 106', status: 'Offline' },
    { id: 7, name: 'Printer 7', brand: 'Brand G', type: 'Type G', location: 1, building: 'A5', room: ' 107', status: 'Online' },
    { id: 8, name: 'Printer 8', brand: 'Brand H', type: 'Type H', location: 2, building: 'C4', room: ' 108', status: 'Offline' },
    { id: 9, name: 'Printer 9', brand: 'Brand I', type: 'Type I', location: 1, building: 'H1', room: ' 109', status: 'Online' },
    { id: 10, name: 'Printer 10', brand: 'Brand J', type: 'Type J', location: 2, building: 'H3', room: ' 110', status: 'Offline' },
  ]);

  const addPrinter = (newPrinter) => {
    setPrinters((prevPrinters) => [...prevPrinters, newPrinter]);
  };

  const removePrinter = (printerId) => {
    setPrinters((prevPrinters) => prevPrinters.filter((printer) => printer.id !== printerId));
  };

  const editPrinter = (updatedPrinter) => {
    setPrinters((prevPrinters) =>
      prevPrinters.map((printer) => (printer.id === updatedPrinter.id ? updatedPrinter : printer))
    );
  };

  return (
    <PrinterListContext.Provider value={{ printers, addPrinter, removePrinter, editPrinter }}>
      {children}
    </PrinterListContext.Provider>
  );
};

export default PrinterListProvider;