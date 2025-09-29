import React from 'react'
import styled from "../css/readyplant.module.css";
import { MainButton } from '../Custom/MainButton';
export default function ReadyPrefectPlant() {
  return (
   <>
    <div className={`${styled.background} text-light mt-5`}>
        <div className={`${styled.overlay} text-light d-flex flex-column justify-content-center align-items-center text-center gap-4`}>
<h1>Ready to Find your Perfect Plant?
</h1>
<p>Browse our online store or visit us in person to<br/> experience the beauty of nature.
</p>
<MainButton variant="outline">Show Now</MainButton>
    </div>
    
    </div>
   </>
  )
}
