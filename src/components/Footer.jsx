import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import styled from "../css/footer.module.css";
import DarkNavBar from "./DarkNavBar";
import { NavLink } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <>
      <div className={`${styled.bg}`}>
        {" "}
        <Container className="py-4">
 
<div className="d-flex flex-wrap justify-content-around align-items-center gap-3"> <img
            width="195"
            height="40"
            src=  "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/normal-header.svg"
            alt=""
            decoding="async"
          />
          
          <Nav className="d-flex gap-3">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link text-dark"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link text-dark"
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link text-dark"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link text-dark"
              }
              to="/contact"
            >
              Contact
            </NavLink>

           
          </Nav>
           <div className="d-flex gap-3 fs-4">
              <MdOutlineFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaXTwitter />
            </div>
        </div>
           
 
        <hr />
        <p className="py-3 text-center">Copyright © 2025 Generic eCommerce</p>
        </Container>
      </div>
    </>
  );
}
