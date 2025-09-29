import React from "react";
import aboutBg from "../assets/about-bg.jpg";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import CoreValues from "../components/CoreValues";
import OurMission from "../components/OurMission";
export default function About() {
  return (
    <>
      <Header
        bgImage={aboutBg}
        title="About Us"
        subtitle="We are Passionate About Our Work"
        showButton={false}
      />
      <AboutUs />
      <CoreValues />
      <OurMission />
    </>
  );
}
