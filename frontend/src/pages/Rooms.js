import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import Navbar from "../components/Navbar";
const Rooms = () => {
  return (
    <>
    <Navbar />
      <Hero hero="roomsHero">
        <Banner title="our pets">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Footer />
    </>
  );
};

export default Rooms;
