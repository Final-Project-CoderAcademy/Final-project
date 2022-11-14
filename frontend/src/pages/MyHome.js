import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, deleteBlog, userAllBlogs } from "../actions/blogActions";
import { getUserProfile, updateUserProfile } from "../actions/userActions";
import { BLOG_CREATE_RESET } from "../contents/blogContents";
import { USER_UPDATE_RESET } from "../contents/userContents";
import MyBlog from "../components/MyBlog"
import MyDetails from "../components/MyDetails"

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
        <Col xs={12} md={12}>
          <Link to="/">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>


          <CardGroup>

            <Card style={{backgroundColor: "lightgrey", textAlign: "center", margin: "20px", border: "1px solid lightgrey", borderRadius: "10px"}}>
              <Card.Body>
                <Card.Title>MyDetails</Card.Title>
                <Card.Text>
                  You can change your account information here!
                </Card.Text>
                <Link to="/myhome/myDetails">
                  <Button variant="primary">To myDetails</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{backgroundColor: "lightgrey", textAlign: "center",  margin: "20px", border: "1px solid lightgrey", borderRadius: "10px"}}>
              <Card.Body>
                <Card.Title>MyBlogs</Card.Title>
                <Card.Text>
                  You can manage your blogs here!
                </Card.Text>
                <Link to="/myhome/myBlogs">
                  <Button variant="primary">To myBlogs</Button>
                </Link>
              </Card.Body>
            </Card>

          </CardGroup>


        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
