import React from "react";
import img1 from "../assets/house-plant.jpg";
import img2 from "../assets/outdoor-plant.jpg";
import img3 from "../assets/succulents.jpg";
import img4 from "../assets/dessert-bloom.jpg";
import SectionOfCat from "./SectionOfCat";
export default function OurCategory({}) {
  const data = [
    { img: img1, title: "Houseplants" },
    { img: img2, title: "Outdoor Plants" },
    { img: img3, title: "Succulents" },
    { img: img4, title: "Desert Bloom" },
  ];
  return (
    <>
      <h1 className="text-center my-5">Our Categories</h1>
      <div className="container mb-5">
        <div className="row g-4 justify-content-center">
          {data.map((d, index) => (
            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center" key={index}>
              <SectionOfCat img={d.img} title={d.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
