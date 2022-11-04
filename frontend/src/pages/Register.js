import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";
import { register } from "../actions/userActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  // dispatch action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("clicked", password);
    if (password !== confirmPassword) {
      setMessage("Password not match");
    } else {
      dispatch(register(username, email, password));
    }
  };

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </Link>
      <h1 className="mb-4">SIGN UP</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username </Form.Label>
          <Form.Control
            type="string"
            placeholder="Jane"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="password">
          <Form.Label>Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          SIGN UP
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already have an account?{" "}
          <Link to={redirect ? `/login?redirect=${redirect}` : "/register"}>
            LOG IN
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
