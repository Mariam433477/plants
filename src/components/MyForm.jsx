import React from "react";
import Form from "react-bootstrap/Form";
import { MainButton } from "../Custom/MainButton";
export default function MyForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3 w-75" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="phone" />
        </Form.Group>
        <Form.Group className="mb-3 w-75" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>

        <MainButton> Submit</MainButton>
      </Form>
    </>
  );
}
