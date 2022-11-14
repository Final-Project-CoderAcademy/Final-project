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

  return (
    <Container>
      <div className="text-center">
        <h2 className="mb-3">MY BLOG</h2>

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
            <Col className="col-sm-5 mb-3" md="auto">
              <Link to={`/blogs/${blog._id}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blogListImg mx-auto d-block"
                />
              </Link>
            </Col>
            <Col className="col-sm-4 mb-3 text-center">
              <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
              <Row className="d-flex  align-items-center text-sm-end">
                <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                <p className="mb-0">{blog.name}</p>
              </Row>
            </Col>
            <Col className="col-sm-3 mb-3 text-center">
              <Button onClick={() => deleteBlogHandler(blog._id)}>
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
