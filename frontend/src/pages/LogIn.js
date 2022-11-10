import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Row, Col, Form, Container } from "react-bootstrap";

import { logIn } from "../actions/userActions";

const Login = () => {
  const initialLoginForm = { email: "", password: "" };
  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { email, password } = loginForm;

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Validation
  const [errors, setErrors] = useState("");
  const setField = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!email || email === "") newErrors.email = "Please enter your email";
    if (!password || password === "")
      newErrors.password = "Please enter password";
    return newErrors;
  };

  // dispatch action
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogIn = useSelector((state) => state.userLogIn);
  const { loading, error, userInfo } = userLogIn;

  const { search } = useLocation();

  const redirect = search ? search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    dispatch(logIn(email, password));
    if (error) {
      console.log(error);
      error.forEach((err) => {
        if (err.param === "email") {
          setEmailError(err.msg);
        }

        if (err.param === "password") {
          setPasswordError(err.msg);
        }
      });
    }

    navigate("/");
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
          <h2 className="mb-4 text-center">LOG IN</h2>

          <Form onSubmit={submitHandler} noValidate>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => {
                  setField("email", e.target.value);
                }}
                isInvalid={errors.email || emailError}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email || emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password </Form.Label>
              <Form.Control
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => {
                  setField("password", e.target.value);
                }}
                isInvalid={errors.password || passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password || passwordError}
              </Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2 d-md-block">
              <Button variant="primary" type="submit" className="px-5 ">
                LOG IN
              </Button>
            </div>
          </Form>
          <Row className="py-3">
            <Col>
              New user?{" "}
              <Link
                to={redirect ? `/register?register=${redirect}` : "/register"}
              >
                SIGN UP
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
