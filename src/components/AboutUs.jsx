import React from "react";
import img from "../assets/about-us.jpg";
import boy from "../assets/testimonial.png";
export default function AboutUs() {
  return (
    <>
      <div className="container my-5">
        <div className="d-flex justity-content-between align-items-center">
          <img src={img} alt="" />
          <div className="p-5 d-flex flex-column gap-4 ">
            <h1>We strive to provide our customers with the highest quality</h1>
            <p>
              Urban Jungle Co. was founded in 1960 by a group of plant
              enthusiasts who recognized the positive impact that plants can
              have on our lives. Whether it’s purifying the air, reducing
              stress, or simply adding a touch of beauty to your environment,
              plants are more than just decoration—they’re a lifestyle.
            </p>
            <hr />
            <p>
              “We love what we do & create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.”
            </p>
            <div className="d-flex justity-content-center align-items-center">
              <img src={boy} alt="" width="60" />
              <div className="mx-3 d-flex flex-column">
                <h5>Karen Lynn</h5>
                <p>Karen Lynn CEO & Co-founder @ Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
