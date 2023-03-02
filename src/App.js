import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import {BreadBlog} from "./pages/breadblog"
import {CL} from "./pages/cl"

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/breadblog" element={<BreadBlog/>} />
        <Route path="/cl" element={<CL/>}/>
      </Routes>
  );
}

export default App;
