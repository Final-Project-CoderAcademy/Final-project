import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBlog } from "../actions/blogActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { BLOG_CREATE_RESET } from "../contents/blogContents";

const BlogEdit = () => {
  const { id: userId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState("");

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const blogCreate = useSelector((state) => state.blogCreate);
  const {
    success: successCreate,
    error: errorCreate,
    blog: newBlog,
  } = blogCreate;

  useEffect(() => {
    if (!userInfo || userInfo._id !== userId) {
      navigate("/login");
    }
    if (successCreate) {
      dispatch({ type: BLOG_CREATE_RESET });
      navigate("/blogs");
    }
  }, [dispatch, navigate, userId, newBlog, successCreate, userInfo]);

  const submitBlogHandler = (e) => {
    e.preventDefault();
    dispatch(
      createBlog({
        title,
        article,
        image,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multerpart/form-data",
        },
      };
      const { data } = await axios.post("https://myway-backend.herokuapp.com/api/image/upload", formData, config);
      setImage(data.originalname);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/myhome/myBlogs">
            <i
              className="fa-solid fa-arrow-left mt-5"
              style={{ color: "black" }}
            ></i>
          </Link>
          <h2 className="mb-4 text-center">BLOG POST</h2>
          {errorCreate && <p>{errorCreate}</p>}

          <Form onSubmit={submitBlogHandler}>
            <Form.Group controlId="image" className="mb-3">
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder="insert image"
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="string"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="article">
              <Form.Label>Article</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Article"
                rows={8}
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="secondary" type="submit" className="my-3 px-5 ">
                POST
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogEdit;
