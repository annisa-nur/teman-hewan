import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer";
import Testimoni from "../components/Testimoni";
import Mission from "../components/Mission";
import Support from "../components/Support";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Teman Hewan"
          subtitle="Find your pet friends"
        >
          <Link to="/rooms/" className="btn-primary">
            browse our pets
          </Link>
        </Banner>
      </Hero>
      <Mission />
      <Support />
      <Services />
      <Testimoni/>
      <FeaturedRooms />
      <Footer />
    </>
  );
};

export default home;
