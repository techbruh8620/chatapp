import React from "react";
import { Card, Button, Col } from "react-bootstrap";

const ProductCard = (props) => {
  return (
    <Col lg={6} className="mt-5">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={props.imagePath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>{props.price}</Card.Text>
          <Button variant="primary"> Add to Cart </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default ProductCard;
