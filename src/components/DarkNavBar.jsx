import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
import "../css/navbar.css";

export default function DarkNavBar() {
  const location = useLocation();
  console.log("path:", location.pathname);
  const isHome = location.pathname === "/";
  const isShop = location.pathname === "/shop";
  console.log("Navbar class:", isShop ? "navbar-home" : "navbar-default");
  const logoWhite =
    "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/header-logo.svg";
  const logoNormal =
    "https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/normal-header.svg";

  return (
    <Navbar
      data-bs-theme="light"
      className={`py-4 ${isShop ? "navbar-default" : "navbar-home"}`}
    >
      <Container>
        <Navbar.Brand className="me-5" href="#home">
          <img
            width="195"
            height="40"
            src={isShop ? logoNormal : logoWhite}
            alt=""
            decoding="async"
          />
        </Navbar.Brand>
        <div className="row">
          <Nav className={`col-6`}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link"
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-success" : "nav-link"
              }
              to="/contact"
            >
              Contact
            </NavLink>

            <div className="d-flex gap-2 justify-content-center align-items-center ">
              <MdOutlineFacebook />
              <FaInstagram />
              <FaYoutube />
              <FaXTwitter />
            </div>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
}
