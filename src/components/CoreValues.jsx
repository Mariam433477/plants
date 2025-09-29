import React from "react";
import SecCoreValue from "./SecCoreValue";

export default function CoreValues() {
  const data = [
    {
      title: "Passionate About Work",
      subTitle:
        "Passion for work is a enthusiasm and excitement for what you do.",
    },
    {
      title: "Creative team members",
      subTitle:
        "A creative team is to design and execute campaigns & encourage",
    },
    {
      title: "Innovation solutions",
      subTitle:
        "Using either completely concepts finding new ways of using existing",
    },
    {
      title: "Qualitiful products",
      subTitle:
        "Product quality refers to how well a product satisfies our customer",
    },
    {
      title: "Customer satisfaction",
      subTitle:
        "Happy customers are delighted because of the customer service",
    },
    {
      title: "Simplicity interface",
      subTitle:
        "Simplicity is used loosely to refer to the need to minimize a process",
    },
  ];
  return (
    <>
      <div className="py-5" style={{ backgroundColor: "#ecf4d3" }}>
        <h1 className="text-center">
          Our Core Values that Drive
          <br /> Everything We Do
        </h1>
       <div className="container py-5">
        <div className="row g-4">
          {data.map((d, index) => (
            <div className="col-12 col-md-4" key={index}>
              <SecCoreValue title={d.title} sTitle={d.subTitle} />
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}
