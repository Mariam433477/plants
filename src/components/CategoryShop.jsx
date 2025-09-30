import React from "react";
import img1 from "../assets/Tproduct1.jpg";
import img2 from "../assets/Tproduct2.jpg";
import img3 from "../assets/Tproduct3.jpg";
import img4 from "../assets/product-01-400x434.jpg";
import img5 from "../assets/product-05.jpg";
import MyCards from "./MyCards";
export default function CategoryShop() {
  const data = [
    { img: img1, title: "Starlight Succulent", price: "95.00" },
    { img: img2, title: "Silver Mist", price: "92.00" },
    { img: img3, title: "Golden Glow", price: "85.00" },
    { img: img5, title: "Desert Bloom", price: "70.00" },
    { img: img4, title: "Zen Bamboo Grove", price: "90.00" },
    { img: img1, title: "Starlight Succulent", price: "95.00" },
  ];
  return (
    <>
      <div className="container my-5">
        <div className="row g-4 justify-content-center">
          {data.map((d, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center"
            >
              <MyCards img={d.img} title={d.title} price={d.price} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
