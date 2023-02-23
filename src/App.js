import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import {BreadBlog} from "./pages/breadblog"

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/breadblog" element={<BreadBlog/>} />
      </Routes>
  );
}

export default App;
