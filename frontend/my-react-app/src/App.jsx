import { useState, useEffect } from 'react'

import './App.css';
import Home from "./pages/Home";
import History from './pages/History';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { apiRequest } from "./services/api";

// function App() {
//   const [isAuth, setIsAuth] = useState(!!localStorage.getItem("token"));
function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    apiRequest("/auth/me")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);
   
  return (
    <Routes>
      <Route path="/" element={<Home isAuth={isAuth} setIsAuth={setIsAuth} />} />
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/signup" element={<Signup setIsAuth={setIsAuth} />} />
      <Route path="/history" element={isAuth ? <History /> : <Login setIsAuth={setIsAuth} />} />
    </Routes>
  );
}

export default App;

