import React, { useRef } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onLoginHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}></Col>
        <Col ig={6}>
          <Form onSubmit={onLoginHandler} className="form-section">
            <h2 className="wotext"> WOMASHOP</h2>
            <p> Sign in </p>
            <Form.Group className="mb-3">
              <Form.Control placeholder="Enter email" ref={emailRef} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control placeholder="Enter password" ref={passwordRef} />
            </Form.Group>

            <Button type="Submit"> Login </Button>
          </Form>
        </Col>

        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default Login;
