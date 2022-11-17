import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userAllBlogs } from "../actions/blogActions";
import { getUserProfile, updateUserProfile } from "../actions/userActions";
import { BLOG_CREATE_RESET } from "../contents/blogContents";
import { USER_UPDATE_RESET } from "../contents/userContents";

const MyDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const { success: successUpdate } = userUpdateDetails;

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });
    if (!userInfo) {
      navigate("/login");
    }

    if (!userInfo || successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(getUserProfile("profile"));
      dispatch(userAllBlogs(userInfo._id));
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
    }
  }, [dispatch, navigate, successUpdate, userInfo]);
  const updateSubmitHandler = (e) => {
    e.preventDefault();
    if (!password) {
      alert("password is empty!");
    }
    if (!name) {
      alert("name is empty!");
    }
    if (!email) {
      alert("email is empty!");
    }
    if (password !== confirmPassword) {
      alert("password and confirm password must be same");
    }
    if (
      password &&
      password === confirmPassword &&
      window.confirm("Are you sure?")
    ) {
      dispatch(updateUserProfile({ id: userInfo._id, name, email, password }));
      navigate("/");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/myhome">
            <i
              className="fa-solid fa-arrow-left mt-5 float-start"
              style={{ color: "black" }}
            ></i>
          </Link>
          <h2 className="mb-4 text-center">MY DETAIL</h2>
          {successUpdate && (
            <p style={{ color: "green" }}>
              Your profile detail has been updated
            </p>
          )}

          <Form className="mb-5" onSubmit={updateSubmitHandler}>
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="string"
                placeholder="username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
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

            <Form.Group className="mb-3" controlId="password">
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

            <Form.Group className="mb-3" controlId="confirmPassword">
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

            <div className="d-grid gap-2 d-md-block">
              <Button variant="primary" type="submit" className="my-1 px-5 ">
                UPDATE
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default MyDetails;
