import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { register } from "../actions/userActions";
import Message from "../components/Message";

const Register = () => {
  // initialize username state
  const [username, setUsername] = useState("");
  // initialize email state
  const [email, setEmail] = useState("");
  // initialize password state
  const [password, setPassword] = useState("");
  // initialize confirm password state
  const [confirmPassword, setConfirmPassword] = useState("");

  //validation error state for username
  const [usernameError, setUsernameError] = useState("");
  //validation error state for email
  const [emailError, setEmailError] = useState("");
  //validation error state for password
  const [passwordError, setPasswordError] = useState("");
  //validation error state for confirm password
  const [confirmError, setConfirmError] = useState("");

  // dispatch action
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //get signup user state from store
  const userRegister = useSelector((state) => state.userRegister);
  const { error, userInfo } = userRegister;

  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo && !userInfo.errors) {
      navigate(redirect);
    }
    if (username !== "") {
      setUsernameError("");
    }
    if (email !== "") {
      setEmailError("");
    }
    if (password !== "" && password.length < 6) {
      setPasswordError("the number of password character must be at least 6!");
    } else if (password.length >= 6) {
      setPasswordError("");
    }

    if (confirmPassword !== "" && confirmPassword.length < 6) {
      setConfirmError("the number of password character must be at least 6!");
    } else if (password.length >= 6) {
      if (confirmPassword === password) {
        setConfirmError("");
      } else {
        setConfirmError("confirmPassword must be same as password!");
      }
    }
  }, [
    navigate,
    userInfo,
    redirect,
    password,
    username,
    confirmPassword,
    email,
    setPasswordError,
    setUsernameError,
  ]);

  const validation = () => {
    if (!username || username === "")
      setUsernameError("Please enter your username");
    if (!email || email === "") setEmailError("Please enter your email");
    if (!password || password === "") setPasswordError("Please enter password");
    if (!confirmPassword || confirmPassword === "")
      setConfirmError("Please enter confirm password");
    return;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validation();
    if (password !== confirmPassword) {
      setConfirmError("password and confirm password must be the same");
    } else {
      // console.log(username)
      dispatch(register(username, email, password));
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/">
            <i
              data-id="back"
              className="fa-solid fa-arrow-left mt-5"
              style={{ color: "black" }}
            ></i>
          </Link>
          <h2 className="mb-4 text-center">SIGN UP</h2>
          {error && <Message variant="danger">{error}</Message>}
          <Form onSubmit={submitHandler} noValidate id="signupForm">
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
              <Form.Control.Feedback type="invalid" data-error="username">
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
              <Form.Control.Feedback type="invalid" data-error="email">
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
              <Form.Control.Feedback type="invalid" data-error="password">
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
              <Form.Control.Feedback
                type="invalid"
                data-error="confirmPassword"
              >
                {confirmError}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button
                variant="primary"
                type="submit"
                className="px-5"
                id="signUp"
              >
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
