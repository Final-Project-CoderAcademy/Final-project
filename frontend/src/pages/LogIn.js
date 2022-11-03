import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";

// import Form from "react-bootstrap/Form";

const Login = () => {
  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </Link>
      <h1 className="mb-4">Log In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username </Form.Label>
          <Form.Control type="string" placeholder="Jane" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control type="password" placeholder="Jane" />
        </Form.Group>
        <Button variant="primary" type="submit">
          LOG IN
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New user? <Link to="/signup">SIGN UP</Link>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
