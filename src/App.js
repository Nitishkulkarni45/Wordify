import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';
import Home from "./Home";
import './App.css';
import About from "./About";


function App() {
  const [isDark, setDark] = useState(true);
  return (
    <div>
      <Routes>
        <Route  path="/" element={<Home isDark={isDark}/>}/>
        <Route  path="/About" element={<About isDark={isDark} setDark={setDark}/>}/>
      </Routes>
    </div>
  );
}

export default App;
