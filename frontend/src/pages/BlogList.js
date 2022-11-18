import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { allBlogs, deleteBlog } from "../actions/blogActions";
import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [successDelete, setSuccessDelete] = useState(false);
  const blogsList = useSelector((state) => state.blogsList);
  const { error, blogs } = blogsList;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;
  const blogDelete = useSelector((state) => state.blogDelete);
  const { success } = blogDelete;

  useEffect(() => {
    if (successDelete) {
      setSuccessDelete(false);
    }
    if (userInfo) {
      dispatch(allBlogs());
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [successDelete, dispatch, userInfo, navigate, success]);

  const deleteBlogHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
      setSuccessDelete(success);
    }
  };

  const imageShow = () => blogs.map(blog => {
    showImage(blog.title, blog.image)
  })
  const showImage = async (title, name) => {
    return await fetch(`https://myway-backend.herokuapp.com/api/image/download?url=${name}`).then((res) => {
      return res.blob()
    }).then((blob) => {
      let blobUrl = URL.createObjectURL(blob);
      if (blobUrl) {
        document.getElementById(title).src = blobUrl
      }
    })
  }
  if (blogs && blogs.length !== 0){
    imageShow()
  }
  
  
  return (
    <>
      <figure className="position-relative">
        <img
          src="https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt="blog"
          className="img-fluid pageImg"
        />
        <figcaption>
          <h1>BLOG</h1>
        </figcaption>
      </figure>

      <Container>
        <h4 className="m-5 ps-3">All Posts</h4>

        {blogs === undefined || blogs.length === 0
          ? error && (
              <p style={{ color: "lightgrey", textAlign: "center" }}>{error}</p>
            )
          : blogs.map((blog) => (
              <Row
                key={blog._id}
                className="mt-4 d-flex justify-content-center"
              >
                <Col className="col-sm-4 mb-3" md="auto" key={blog._id}>
                  <Link to={`/blogs/${blog._id}`}>
                    <img
                      src=""
                      id={blog.title}
                      className="blogListImg mx-auto d-block"
                    />
                  </Link>
                </Col>

                {userInfo.isAdmin ? (
                  <>
                    <Col className="col-sm-5 mb-3 text-center">
                      <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
                      <Row className="d-flex  align-items-center text-sm-end">
                        <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                        <p className="mb-0">{blog.name}</p>
                      </Row>
                    </Col>
                    <Col className="col-sm-3 mb-3 text-center">
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteBlogHandler(blog._id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </>
                ) : !(userInfo._id === blog.user) ? (
                  <Col className="col-sm-8 mb-3 text-center">
                    <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
                    <Row className="d-flex  align-items-center text-sm-end">
                      <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                      <p className="mb-0">{blog.name}</p>
                    </Row>
                  </Col>
                ) : (
                  <>
                    <Col className="col-sm-5 mb-3 text-center">
                      <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
                      <Row className="d-flex  align-items-center text-sm-end">
                        <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                        <p className="mb-0">{blog.name}</p>
                      </Row>
                    </Col>
                    <Col className="col-sm-3 mb-3 text-center">
                      <Button
                        variant="outline-danger"
                        onClick={() => deleteBlogHandler(blog._id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </>
                )}
              </Row>
            ))}
      </Container>
    </>
  );
};

export default BlogList;
