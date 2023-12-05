import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomeStudent from "./pages/HomeStudent";
import Login from "./pages/Login";
import Print from "./pages/Print";

import UserProvider from "./components/UserContext";

export default function App() {
  return (
    <UserProvider>
      <HashRouter>
        <Routes>
          <Route path="/" exact element={<HomeStudent />} />
          <Route path="/home" exact element={<HomeStudent />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/print" exact element={<Print />} />
        </Routes>
      </HashRouter>
    </UserProvider>
  );
}
