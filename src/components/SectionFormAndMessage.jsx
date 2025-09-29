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
    <>
      <div className="container d-flex justify-content-between flex-wrap gap-5 py-5">
        <div className="d-flex flex-column col-md-4">
          <h1 className="mb-5">Send us Message</h1>
          {contactInfo.map((info, index) => (
            <SendMessage
              key={index}
              myIcon={info.myIcon}
              type={info.type}
              value={info.value}
            />
          ))}
        </div>

        <div className="col-md-7">
          <MyForm />
        </div>
      </div>
    </>
  );
}
