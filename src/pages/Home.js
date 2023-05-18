import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Footer from "../components/Footer";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Teman Hewan"
          subtitle="Find your pet friends"
        >
          <Link to="/rooms" className="btn-primary">
            browse our pets
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      <Footer />
    </>
  );
};

export default home;
