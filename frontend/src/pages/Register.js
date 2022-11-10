import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form, Container } from "react-bootstrap";

import { register } from "../actions/userActions";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //validation
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // dispatch action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo && !userInfo.errors) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const validation = () => {
    if (!username || username === "")
      setUsernameError("Please enter your username");
    if (!email || email === "") setEmailError("Please enter your email");
    if (!password || password === "") setPasswordError("Please enter password");
    if (!confirmPassword || confirmPassword === "")
      setConfirmError("Please enter confirm password");
    if (password !== confirmPassword)
      setConfirmError("password must be the same");
    return;
  };

  const submitHandler = (e) => {
    console.log("clicked");
    e.preventDefault();
    validation();
    // if (password !== confirmPassword) {
    //   setMessage("Password not match");
    // } else {
    //   // console.log(username)
    //   dispatch(register(username, email, password));
    // }

    dispatch(register(username, email, password));

    if (error) {
      error.forEach((err) => {
        console.log("err", err);
        if (err.param === "name") {
          setUsernameError(err.msg);
          console.log(err.msg);
        }
        if (err.param === "email") {
          setEmailError("invalid email address");
        }
        if (err.param === "password") {
          setPasswordError(err.msg);
          // console.log(err.msg);
        }
      });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">SIGN UP</h2>

          <Form onSubmit={submitHandler} noValidate>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username </Form.Label>
              <Form.Control
                type="username"
                placeholder="Jane"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                isInvalid={usernameError}
              />
              <Form.Control.Feedback type="invalid">
                {usernameError}
              </Form.Control.Feedback>
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
                isInvalid={emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
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
                isInvalid={passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
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
                isInvalid={confirmError}
              />
              <Form.Control.Feedback type="invalid">
                {confirmError}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="primary" type="submit" className="px-5 ">
                SIGN UP
              </Button>
            </div>
          </Form>

          <Row className="py-3">
            <Col>
              Already have an account?{" "}
              <Link to={redirect ? `/login?redirect=${redirect}` : "/register"}>
                LOG IN
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
