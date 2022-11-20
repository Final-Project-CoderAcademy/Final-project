import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, deleteBlog, userAllBlogs } from "../actions/blogActions";

const MyBlog = () => {
  const dispatch = useDispatch();

  const userBlogs = useSelector((state) => state.userBlogs);
  const { blogs } = userBlogs;

  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const blogDelete = useSelector((state) => state.blogDelete);
  const { success: successDelete } = blogDelete;

  useEffect(() => {
    if (userInfo) {
      dispatch(userAllBlogs(userInfo._id));
    }

    // eslint-disable-next-line
  }, [userInfo, dispatch, successDelete]);

  const createBlogHandler = () => {
    dispatch(createBlog);
  };

  const deleteBlogHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
    }
  };
  const imageShow = () =>
    blogs.map((blog) => showImage(blog.title, blog.image));
  const showImage = async (title, name) => {
    return await fetch(
      `https://myway-backend.herokuapp.com/api/image/download?url=${name}`
    )
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        let blobUrl = URL.createObjectURL(blob);
        if (blobUrl) {
          document.getElementById(title).src = blobUrl;
        }
      });
  };
  if (blogs && blogs.length !== 0) {
    imageShow();
  }

  return (
    <Container>
      <div className="text-center">
        <Link to="/myhome">
          <i
            className="fa-solid fa-arrow-left mt-5 float-start"
            style={{ color: "black" }}
          ></i>
        </Link>
        <h2 className="m-3">MY BLOG</h2>

        <Link to={`/blogs/${userInfo._id}/create`}>
          <Button variant="info" className="px-4" onClick={createBlogHandler}>
            CREATE A POST
          </Button>
        </Link>
      </div>
      <Container>
        <h4 className="m-5 ps-3">All Posts</h4>

        {blogs?.map((blog) => (
          <Row className="mt-4 d-flex justify-content-center" key={blog._id}>
            <Col className="col-sm-3 mb-3" md="auto">
              <Link to={`/blogs/${blog._id}`}>
                <img
                  src=""
                  id={blog.title}
                  alt={blog.title}
                  className="blogListImg mx-auto d-block"
                />
              </Link>
            </Col>
            <Col className="col-sm-3 mb-3 text-center">
              <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
            </Col>
            <Col className="col-sm-3 mb-3 text-center">
              <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
            </Col>
            <Col className="col-sm-3 mb-3 text-center">
              <Button
                variant="outline-danger"
                onClick={() => deleteBlogHandler(blog._id)}
              >
                Delete
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
};

export default MyBlog;
