import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form } from "react-bootstrap";

import { logIn } from "../actions/userActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(email, password));
    navigate("/");
  };

  return (
    <div>
      <Link to="/">
        <FontAwesomeIcon icon={solid("arrow-left")} />
      </Link>
      <h1 className="mb-4">Log In</h1>
      <Form onSubmit={submitHandler}>
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

        <Button variant="primary" type="submit">
          LOG IN
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New user?{" "}
          <Link to={redirect ? `/register?register=${redirect}` : "/register"}>
            SIGN UP
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
