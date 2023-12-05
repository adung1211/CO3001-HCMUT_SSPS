import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeStudent from "./pages/HomeStudent";
import Login from "./pages/Login";
import Print from "./pages/Print";
import Properties from "./pages/Properties";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<HomeStudent />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/print" exact element={<Print />} />
        <Route path="/Properties" exact element={<Properties />} />
      </Routes>
    </HashRouter>
  );
}
