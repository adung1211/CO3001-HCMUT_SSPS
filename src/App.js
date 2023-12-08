import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Print from "./pages/Print";
import Properties from "./pages/Properties";
import Buy from "./pages/Buy";
import History from "./pages/History";
import Printers from "./pages/Printers";
import Papers from "./pages/Printers";
import ChoosePrinter from "./pages/ChoosePrinter";
import Bill from "./pages/Bill";

import UserProvider from "./components/UserContext";
import { PrintProvider } from "./components/PrintContext";

export default function App() {
  return (
    <PrintProvider>
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/print" exact element={<Print />} />
          <Route path="/properties" exact element={<Properties />} />
          <Route path="/buy" exact element={<Buy />} />
          <Route path="/history" exact element={<History />} />
          <Route path="/printers" exact element={<Printers />} />
          <Route path="/papers" exact element={<Papers />} />
          <Route path="/chooseprinter" exact element={<ChoosePrinter />} />
          <Route path="/bill" exact element={<Bill/>} />
        </Routes>
      </HashRouter>
    </UserProvider>
    </PrintProvider>
  );
}
