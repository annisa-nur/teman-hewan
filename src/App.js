import React from "react";
import "./App.css";
//import Login from "./pages/Login";
//import Signup from "./pages/Signup";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import ApprovalForm from "./pages/ApprovalForm";
import Cart from "./pages/Cart";


import Navbar from "./components/Navbar";

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>

        {/* <Route index element={<Login />}/>
        <Route path="/signup/" element={<Signup />} /> */}
        {/* <Route path="/home/" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path="/rooms/" element={<Rooms />} />
        <Route path="/about/" element={<About />} />
        <Route path="/contact-us/" element={<ContactUs />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/approvalform/" element={<ApprovalForm />} />
        <Route path="/Cart/" element={<Cart />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;
