import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";
export default function FollowUs() {
  return (
    <>
      <div
        style={{ backgroundColor: " #ecf4d3" }}
        className="d-flex flex-column justify-content-center align-items-center gap-3 py-5 mt-5"
      >
        <h2>Follow us @Urban Jungle Co.</h2>
        <div className="d-flex gap-3 fs-1">
          <MdOutlineFacebook />
          <FaYoutube />
          <FaPinterest />
          <FaXTwitter />
          <FaInstagram />
        </div>
      </div>
    </>
  );
}
