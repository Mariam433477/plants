import React from "react";

import SectionShop from "./../components/SectionShop";

import CategoryShop from "../components/CategoryShop";
import ReadyPrefectPlant from "./../components/ReadyPrefectPlant";
import shopBg from "../assets/shop-bg.jpg";
import Header from "../components/Header";
export default function Shop() {
  return (
    <>
      <Header
        bgImage={shopBg}
        title="Our Products"
        subtitle="Find the Perfect Plant for Your Space"
        showButton={false}  
      />
      <CategoryShop />
    </>
  );
}
