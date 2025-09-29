import React from "react";
import style from "../css/sendmessage.module.css";

export default function SendMessage({ myIcon, type, value }) {
  return (
    <div className="d-flex align-items-start mb-3">
      <div className={style.bg}>{myIcon}</div>

      <div className="ms-3">
        <h5>{type}</h5>
        <p className="mb-0">{value}</p>
      </div>
    </div>
  );
}
