// App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Home from "./layout/Home";
import Create from "./layout/Create";
import Update from "./layout/Update";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
};

export default App;
