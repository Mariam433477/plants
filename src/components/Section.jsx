import React from "react";

import {
  faLock,
  faTruck,
  faBoxOpen,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import GridIcons from "./GridIcons";
import { icon } from "@fortawesome/fontawesome-svg-core";
export default function Section() {
  const data = [
    {
      icon: faLock,
      title: "Secure Payment",
      subTitle: "Elementum feugiat diam",
    },
    { icon: faTruck, title: "Free Shipping", subTitle: "For $50 order" },
    {
      icon: faBoxOpen,
      title: "Delivered with Care",
      subTitle: "Lacinia pellentesque leo",
    },
    {
      icon: faHeart,
      title: "Excellent Service",
      subTitle: "Blandit gravida viverra",
    },
  ];
  return (
    <div className="container">
      <div className="row text-center">
        {data.map((d, index) => {
          return (
            <div className="col-12 col-sm-6 col-lg-3 mb-4">
                <GridIcons
              icon={d.icon}
              title={d.title}
              subTitle={d.subTitle}
              key={index}
            />
            </div>
          
          );
        })}
      </div>
      <hr />
    </div>
  );
}
