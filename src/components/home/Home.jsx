import React from "react";
import Navbar from "../Navbar";
import HeroSection from "./HeroSection";
import Skills from "./Skills";
import MyWork from "./MyWork";
import Contact from "./Contact";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <MyWork />
      <Contact />
    </>
  );
}

export default Home;
