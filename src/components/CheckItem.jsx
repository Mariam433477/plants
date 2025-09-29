import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function CheckItem({ text }) {
  return (
    <div className="d-flex align-items-start mb-2">
      <FaCircleCheck className="me-2 text-success" />
      <p className="mb-0">{text}</p>
    </div>
  );
}