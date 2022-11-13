import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, deleteBlog, userAllBlogs } from "../actions/blogActions";
import { getUserProfile, updateUserProfile } from "../actions/userActions";
import { BLOG_CREATE_RESET } from "../contents/blogContents";
import { USER_UPDATE_RESET } from "../contents/userContents";

const MyHome = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userDetails = useSelector((state) => state.userDetails);
  const { error: errorUser, user } = userDetails;

  const userUpdateDetails = useSelector((state) => state.userUpdateDetails);
  const { success: successUpdate } = userUpdateDetails;

  const userBlogs = useSelector((state) => state.userBlogs);
  const { error, blogs } = userBlogs;

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const blogDelete = useSelector((state) => state.blogDelete);
  const { success: successDelete, error: errorDelete } = blogDelete;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    error: errorCreate,
    success: successCreate,
    blog: newBlog,
  } = blogCreate;

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });
    if (!userInfo) {
      navigate("/login");
    }
    if (successCreate) {
      navigate(`/blogs/${newBlog}/edit}`);
    } else {
      dispatch(userAllBlogs(userInfo._id));
    }

    if (!user.name || successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      dispatch(getUserProfile("profile"));
      dispatch(userAllBlogs(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
    }
  }, [
    dispatch,
    navigate,
    successUpdate,
    userInfo,
    successCreate,
    //   successDelete,
    newBlog,
    user,
    //   blogs,
  ]);

  const createBlogHandler = () => {
    dispatch(createBlog);
  };

  const deleteBlogHandler = (id) => {
    dispatch(deleteBlog(id));
  };

  const updateSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user._id, name, email, password }));
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
          <h2 className="mb-4 text-center">MY HOME</h2>
          {successUpdate && (
            <p style={{ color: "green" }}>
              Your profile detail has been updated
            </p>
          )}
          {errorUser && <p>{errorUser}</p>}

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

          <div className="text-center">
            <h3 className="mb-3">MY BLOG</h3>
            {error && <p>{error}</p>}
            {errorCreate && <p>{errorCreate}</p>}
            {errorDelete && <p>{errorDelete}</p>}
            <Link to="/blogs/:id/edit">
              <Button
                variant="info"
                className="px-4"
                onClick={createBlogHandler}
              >
                CREATE A POST
              </Button>
            </Link>
          </div>
          {blogs?.map((blog) => (
            <Row className="mt-4" key={blog._id}>
              <Col className="col-sm-5 mb-3" md="auto">
                <Link to="/blogs/:id">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className=" mx-auto d-block"
                    style={{ height: 100, width: 100 }}
                  />
                </Link>
              </Col>
              <Col className="col-sm-7 mb-3 text-center">
                <h6 className="pageTitle">{blog.title}</h6>
                <Row className="d-flex  align-items-center text-sm-end">
                  <div>
                    <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                    {blog.user === userInfo._id && (
                      <>
                        <Link to={`/blogs/${blog._id}/edit`}>
                          <Button
                            variant="light"
                            className=" px-2 mx-2"
                            size="sm"
                          >
                            Edit
                          </Button>
                        </Link>
                        <Button
                          variant="dark"
                          className=" px-2"
                          size="sm"
                          onClick={() => deleteBlogHandler(blog._id)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </div>
                </Row>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
