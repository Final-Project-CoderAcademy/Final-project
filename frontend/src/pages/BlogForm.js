import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogDetail, updateBlog } from "../actions/blogActions";
import { BLOG_UPDATE_RESET } from "../contents/blogContents";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BlogEdit = () => {
  const { id: blogId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const [title, setTitle] = useState("");
  const [article, setArticle] = useState("");
  const [image, setImage] = useState("");

  const blogDetails = useSelector((state) => state.blogDetails);
  const { blog, error } = blogDetails;
  console.log("blog: ", blog);

  const blogUpdate = useSelector((state) => state.blogUpdate);
  const { success: successUpdate, error: errorUpdate } = blogUpdate;

  useEffect(() => {
    // if (successUpdate === true) {
    //   dispatch({ type: BLOG_UPDATE_RESET });
    //   navigate("/blogs");
    // } else {
    //   if (!blog._id || blog._id !== blogId) {
    //     dispatch(blogDetail(blogId));
    //   } else {
    //     setTitle(blog.title);
    //     setArticle(blog.article);
    //     setImage(blog.image);
    //   }
    // }
  }, [dispatch, navigate, blogId, blog, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    updateBlog({
      _id: blogId,
      title,
      article,
      image,
    });
  };

  // const [image, setImage] = useState("");
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multerpart/form-data",
  //       },
  //     };
  //     const { data } = await axios.post("/api/upload", formData, config);
  //     setImage(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/myhome">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">BLOG POST</h2>
          {errorUpdate && <p>{errorUpdate}</p>}
          {error && <p>{error}</p>}
          <Form onSubmit={submitHandler}>
            {/* <Form.Group controlId='image'>
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder='insert image'
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="string"
                placeholder={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="article">
              <Form.Label>Article</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={article}
                rows={8}
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
