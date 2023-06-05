import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <>
      <Navbar />
      <Hero>
        <Banner
          title="About Us"
          subtitle="Our way to support life on land"
        >
        </Banner>
      </Hero>
      <Problem />
      <Solution />
      <Footer />
    </>
  );
};

export default about;
