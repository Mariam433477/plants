import React from "react";
 
import SharedLayout from "./SharedLayout";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
 
export default function MainLayout() {
 

  return (
    <>
    {/* <SharedLayout/>  */}
{/* <Home/> */}

{/* <Shop/> */}

<BrowserRouter>
<Routes>

<Route path="/" element={<SharedLayout />}>
<Route index element={<Home />}/>
<Route path="shop" element={<Shop />}/>
<Route path="about" element={<About/>}/>
<Route path="contact" element={<Contact />}/>

</Route >
</Routes>
</BrowserRouter>
    </>
  );
}
