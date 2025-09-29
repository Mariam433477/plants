import React from "react";

import styled from "../css/header.module.css";
import { MainButton } from "../Custom/MainButton";
 
import LightNavBar from "./LightNavBar";
export default function Header() {
  return (
   <div className={styled.background}>
     <div className={styled.overlay}>
    <LightNavBar/>
      <div className="text-light d-flex flex-column justify-content-center align-items-center min-vh-100">
        <p className="fs-4">Welcome to Urban Jungle Co.</p>
        <p className={styled.sizePara}>Discover the Beauty of<br/> Nature at Your Fingertips
</p>
{/* <button className={styled.bgBtn}>Shop Now</button> */}
<MainButton>Shop Now</MainButton>
      </div>
    </div>
   </div>
  );
}
