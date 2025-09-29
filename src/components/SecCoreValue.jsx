import React from "react";
import { RiBox3Fill } from "react-icons/ri";
import sty from "../css/coreval.module.css";
export default function SecCoreValue({ title, sTitle }) {
  return (
    <>
      <div className="d-flex align-items-start gap-3 p-3">
        <div className={sty.bg}>
          <RiBox3Fill  color="white" size={30} />
        </div>
                <div>
<p className="fw-bold fs-3"> {title}</p>
<p>{sTitle}</p>
          </div>
      </div>
    </>
  );
}
