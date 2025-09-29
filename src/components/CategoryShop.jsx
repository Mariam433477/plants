import React from 'react'
import img1 from "../assets/Tproduct1.jpg";
import img2 from "../assets/Tproduct2.jpg";
import img3 from "../assets/Tproduct3.jpg";
import MyCards from './MyCards';
export default function CategoryShop() {
      const data = [
        { img: img1, title: "Starlight Succulent", price: "95.00" },
        { img: img2, title: "Silver Mist", price: "92.00" },
        { img: img3, title: "Golden Glow", price: "85.00" },
        { img: img1, title: "Starlight Succulent", price: "95.00" },
        { img: img2, title: "Silver Mist", price: "92.00" },
        { img: img3, title: "Golden Glow", price: "85.00" },
      ];
  return (
   <>

   <div className="container">
           <div className="d-flex justify-content-around algin-items-center flex-wrap gap-4">
             {data.map((d) => {
               return (
                 <MyCards
                   img={d.img}
                   title={d.title}
                   price={d.price}
                   key={d.img}
                 />
               );
             })}
           </div>
           </div>
   
   </>
  )

}
