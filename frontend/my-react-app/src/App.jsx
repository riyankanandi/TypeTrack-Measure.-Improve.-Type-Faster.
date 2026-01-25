import { useState } from 'react'

import './App.css';
import Home from "./pages/Home";
import History from './pages/History';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));

  return (
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
      <Route path="/history" element={isAuth ? <History /> : <Login setIsAuth={setIsAuth} />} />
    </Routes>
  );
}

export default App;

