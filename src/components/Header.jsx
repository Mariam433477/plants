// import React from "react";

// import styled from "../css/header.module.css";
// import { MainButton } from "../Custom/MainButton";
// import DarkNavBar from "./DarkNavBar";

// export default function Header() {
//   return (
//    <div className={styled.background}>
//      <div className={styled.overlay}>
//     {/* <DarkNavBar/> */}
//       <div className="text-light d-flex flex-column justify-content-center align-items-center min-vh-100">
//         <p className="fs-4">Welcome to Urban Jungle Co.</p>
//         <p className={styled.sizePara}>Discover the Beauty of<br/> Nature at Your Fingertips
// </p>
// {/* <button className={styled.bgBtn}>Shop Now</button> */}
// <MainButton>Shop Now</MainButton>
//       </div>
//     </div>
//    </div>
//   );
// }

import React from "react";
import styled from "../css/header.module.css";
import { MainButton } from "../Custom/MainButton";

export default function Header({
  bgImage,
  title,
  subtitle,
  showButton = true,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
  };

  return (
    <div className={styled.background} style={backgroundStyle}>
      <div className={styled.overlay}>
        <div className="text-light d-flex flex-column justify-content-center align-items-center min-vh-100">
          <p className={styled.title}>{title}</p>
          <p className={styled.sizePara}>{subtitle}</p>
          {showButton && <MainButton className="mt-4">Shop Now</MainButton>}
        </div>
      </div>
    </div>
  );
}
