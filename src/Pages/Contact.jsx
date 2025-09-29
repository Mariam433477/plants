import React from 'react'
import Header from '../components/Header'
import contactBg from "../assets/contact-bg.jpg";

export default function Contact() {
  return (
   <>
         <Header
        bgImage={contactBg}
        title="Contact Us"
        subtitle="Let’s Connect
"
        showButton={false}
      />

   </>
  )
}
