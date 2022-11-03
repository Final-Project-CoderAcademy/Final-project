import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";

const Signup = () => {
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </Link>
      <h1 className="mb-4">SIGN UP</h1>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username </Form.Label>
          <Form.Control type="string" placeholder="Jane" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="example@gmail.com" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          SIGN UP
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account? <Link to="/login">LOG IN</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
