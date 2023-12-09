// NumberContext.js
import { createContext, useContext, useState } from 'react';

const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const updateNumbers = (newNumber1, newNumber2) => {
    setNumber1(newNumber1);
    setNumber2(newNumber2);
  };

  return (
    <NumberContext.Provider value={{ number1, number2, updateNumbers }}>
      {children}
    </NumberContext.Provider>
  );
};

export const useNumberContext = () => {
  const context = useContext(NumberContext);
  if (!context) {
    throw new Error('useNumberContext must be used within a NumberProvider');
  }
  return context;
};