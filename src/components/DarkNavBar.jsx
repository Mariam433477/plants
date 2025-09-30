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
      expand="lg"
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
        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto d-flex align-items-lg-center gap-lg-4">
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
              to="/contact"
            >
              Contact
            </NavLink>

            <div className="d-flex gap-3 mt-3 mt-lg-0">
              <MdOutlineFacebook size={20} />
              <FaInstagram size={20} />
              <FaYoutube size={20} />
              <FaXTwitter size={20} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
