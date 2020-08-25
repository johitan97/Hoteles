import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Beach Resort Hotel"
          subtitle="Habitaciones desde $100 dolares"
        >
          <Link to="/rooms" className="btn-primary">
            Nuestras Habitaciones
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
      
    </>
  );
};

export default home;