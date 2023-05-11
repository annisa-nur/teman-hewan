import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Payment from "./pages/Payment";

import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>

        <Route index element={<Home />}/>
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/payment/" element={<Payment />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;
