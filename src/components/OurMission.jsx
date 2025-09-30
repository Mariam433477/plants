import React from "react";
import img from "../assets/our-mission.jpg";
import CheckItem from "./CheckItem";

export default function OurMission() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 p-4 d-flex flex-column gap-4">
          <h1>Our Mission</h1>
          <p>
            Our mission is to make the world a greener place, one plant at a
            time. We strive to provide our customers with the highest quality
            plants and plant care products, along with the knowledge and support
            to help them thrive.
          </p>

          <div className="row g-3">
            <div className="col-12 col-sm-6">
              <CheckItem text="Quality and Variety" />
            </div>
            <div className="col-12 col-sm-6">
              <CheckItem text="Fast Delivery" />
            </div>
            <div className="col-12 col-sm-6">
              <CheckItem text="Best Price Guarantee" />
            </div>
            <div className="col-12 col-sm-6">
              <CheckItem text="24/7 Support" />
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img src={img} alt="Our Mission" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}
