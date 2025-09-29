import React from "react";
import { CiStar } from "react-icons/ci";
import Card from "react-bootstrap/Card";
export default function MyCards({ img, title, price }) {
  return (
    <>
      <Card style={{ width: "25rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <div>
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>{" "}
          </Card.Title>
          <Card.Title> {title}</Card.Title>
          <Card.Title> Indoor Plants</Card.Title>
          <Card.Text>$ {price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
