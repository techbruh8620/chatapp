import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}></Col>
        <Col ig={6}>
          <h2 className="mt-5" style={{ color: "red" }}>
            signup to Get Started
          </h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Enter email" type="email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control placeholder="Enter password" type="password" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                placeholder="Enter confirm password"
                type="password"
              />
            </Form.Group>

            <Button type="Submit"> Submit </Button>
          </Form>
        </Col>

        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default Signup;
