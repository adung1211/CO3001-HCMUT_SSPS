import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeStudent from "./pages/HomeStudent";
import Login from "./pages/Login";
import Print from "./pages/Print";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/home" exact element={<HomeStudent />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/print" exact element={<Print />} />
      </Routes>
    </BrowserRouter>
  );
}
