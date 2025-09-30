import React from "react";
import Form from "react-bootstrap/Form";
import { MainButton } from "../Custom/MainButton";

export default function MyForm() {
  return (
    <div className="d-flex justify-content-center">
      <Form className="w-100" style={{ maxWidth: "600px" }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Write your message..."
          />
        </Form.Group>

        <div className="text-center mt-4">
          <MainButton>Submit</MainButton>
        </div>
      </Form>
    </div>
  );
}
