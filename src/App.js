import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeStudent from "./pages/HomeStudent";
import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" exact element={<HomeStudent />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
