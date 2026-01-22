import { useState } from 'react'
import './App.css'
import Home from "./pages/Home";
import History from './pages/History';
import { Routes, Route } from "react-router-dom";

function App() {
  return(
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    
  ) 
}

export default App;
