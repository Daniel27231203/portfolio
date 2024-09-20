"use client";
import React from "react";
import Welcome from "./HomeSections/Welcome";
import Contacts from "./HomeSections/Contacts";
import Work from "./HomeSections/Work";
import About from "./HomeSections/About";

const HomePage = () => {
  return (
    <>
      <Welcome />
      <About />
      <Work />
      <Contacts />
    </>
  );
};

export default HomePage;
