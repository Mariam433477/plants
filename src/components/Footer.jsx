import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styled from "../css/footer.module.css";
import DarkNavBar from "./DarkNavBar";

export default function Footer() {
  return (
    <>
      <div className={`${styled.bg}`}>
        {" "}
        <div className="container">
<DarkNavBar/>
        <hr />
        <p className="py-3 text-center">Copyright © 2025 Generic eCommerce</p>
        </div>
      </div>
    </>
  );
}
