import React from "react";
import styled from "../css/sale.module.css";
import { MainButton } from "../Custom/MainButton";
export default function Sale() {
  return (
    <>
      <div className={`${styled.background} my-5 text-light`}>
        <div
          className={`${styled.overlay} my-5 text-light d-flex flex-column justify-content-center align-items-center text-center gap-4`}
        >
          <h1>
            Flash Sale: Up to 50% Off
            <br />
            On Select Items!
          </h1>
          <p>
            Don’t miss out on our flash sale event! For a limited time, enjoy up
            to 50%
            <br /> off on a selection of our best-selling products.
          </p>
          <MainButton variant="outline">Show Now</MainButton>
        </div>
      </div>
    </>
  );
}
