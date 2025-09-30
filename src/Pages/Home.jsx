import React from "react";
import Section from "../components/Section";
import TrendingProducts from "../components/TrendingProducts";
import OurCategory from "../components/OurCategory";
import Sale from "../components/Sale";
import Header from "../components/Header";
import homeBg from "../assets/home-hero-bg.jpg";
export default function Home() {
  return (
    <>
      <Header
        bgImage={homeBg}
        title="Welcome to Urban Jungle Co."
        subtitle="Discover the Beauty of Nature at Your Fingertips"
        showButton={true}
      />
      <Section />
      <TrendingProducts />
      <Sale />
      <OurCategory />
    </>
  );
}
