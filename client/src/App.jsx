import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./pages/Home";
import Result from "./pages/Result";
import Credit from "./pages/Credit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-orange-200 to-blue-100">
     <ToastContainer position="bottom-right" />
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="result" element={<Result />} />
        <Route path="credit" element={<Credit />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
