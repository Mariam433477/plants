import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../css/gridIcon.module.css";
export default function GridIcons({ icon, title, subTitle }) {
  return (
    <div className="my-5 text-center">
      <div className={`${styled.bgDiv}`}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h5> {title}</h5>
      <p> {subTitle}</p>
    </div>
  );
}
