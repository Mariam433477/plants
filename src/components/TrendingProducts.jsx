import React from "react";
import MyCards from "./MyCards";
import img1 from "../assets/Tproduct1.jpg";
import img2 from "../assets/Tproduct2.jpg";
import img3 from "../assets/Tproduct3.jpg";
export default function TrendingProducts() {
  const data = [
    { img: img1, title: "Starlight Succulent", price: "95.00" },
    { img: img2, title: "Silver Mist", price: "92.00" },
    { img: img3, title: "Golden Glow", price: "85.00" },
  ];
  return (
    <>
      <h1 className="text-center my-5">Trending Products</h1>
      <div className="container">
        <div className="d-flex justify-content-around algin-items-center">
          {data.map((d) => {
            return (
              <MyCards
                img={d.img}
                title={d.title}
                price={d.price}
                key={d.img}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
