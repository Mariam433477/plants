import React from "react";
import MyForm from "./MyForm";
import SendMessage from "./SendMessage";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";

export default function SectionFormAndMessage() {
  const contactInfo = [
    { myIcon: <FaPhone />, type: "Phone", value: "555-1234-678" },
    { myIcon: <MdEmail />, type: "Email", value: "mail@example.com" },
    {
      myIcon: <FaLocationDot />,
      type: "Address",
      value: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
         
        <div className="col-12 col-md-4">
          <h1 className="mb-5">Send us a Message</h1>
          <div className="d-flex flex-column gap-4">
            {contactInfo.map((info, index) => (
              <SendMessage
                key={index}
                myIcon={info.myIcon}
                type={info.type}
                value={info.value}
              />
            ))}
          </div>
        </div>

         
        <div className="col-12 col-md-8">
          <MyForm />
        </div>
      </div>
    </div>
  );
}
