import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Books from "./pages/Books";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<Books />} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
