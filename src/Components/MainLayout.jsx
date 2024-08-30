import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Ensure this path is correct
import Hero from "./Hero"; // Ensure this path is correct
import Footer from "./Footer"; // Ensure this path is correct

const MainLayout = ({ children }) => {
  const location = useLocation();

  // Check if the current route is for a resource detail page
  const hideHero = location.pathname.startsWith("/resource/");

  return (
    <>
      <Navbar />
      {!hideHero && <Hero />}
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
