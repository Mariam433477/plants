import React from 'react'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
export default function DarkNavBar() {
  return (
    <Navbar data-bs-theme="light" className="py-4">
          <Container>
            <Navbar.Brand className="me-5" href="#home">
              <img
                width="195"
                height="40"
                src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/normal-header.svg"
                alt=""
                decoding="async"
              />
            </Navbar.Brand>
            <div className="row">
              <Nav className="col-6 text-dark">
                <Nav.Link href="#home" className="text-dark">
                  Home
                </Nav.Link>
                <Nav.Link href="#features" className="text-dark">
                  Shop
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-dark">
                  About
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-dark">
                  Contact
                </Nav.Link>
                 <Nav.Link href="#pricing" className="text-dark">
                            <div className='d-flex gap-2 justify-content-center align-items-center '><MdOutlineFacebook /><FaInstagram /><FaYoutube /><FaXTwitter /></div>
                        </Nav.Link>
              </Nav>
            </div>
          </Container>
        </Navbar>
  )
}
