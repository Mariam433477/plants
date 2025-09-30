import React from "react";
import SecCoreValue from "./SecCoreValue";

export default function CoreValues() {
  const data = [
    {
      title: "Passionate About Work",
      subTitle: "Passion for work is enthusiasm and excitement for what you do.",
    },
    {
      title: "Creative Team Members",
      subTitle:
        "A creative team designs and executes campaigns & encourages innovation.",
    },
    {
      title: "Innovative Solutions",
      subTitle:
        "Finding new ways of using existing concepts to deliver value.",
    },
    {
      title: "Quality Products",
      subTitle: "Product quality refers to how well a product satisfies customers.",
    },
    {
      title: "Customer Satisfaction",
      subTitle:
        "Happy customers are delighted because of excellent service & care.",
    },
    {
      title: "Simple Interfaces",
      subTitle: "Simplicity means minimizing processes for smooth experiences.",
    },
  ];

  return (
    <div className="py-5" style={{ backgroundColor: "#ecf4d3" }}>
      <div className="container">
        <h1 className="text-center mb-5">
          Our Core Values that Drive
          <br /> Everything We Do
        </h1>

        <div className="row g-4">
          {data.map((d, index) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
              <SecCoreValue title={d.title} subTitle={d.subTitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
