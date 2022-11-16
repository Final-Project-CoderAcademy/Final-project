import React, { useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import blogTopImage from "../material/blogSection.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import { allBlogs, deleteBlog } from "../actions/blogActions";
import { useDispatch, useSelector } from "react-redux";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const blogsList = useSelector((state) => state.blogsList);
  const { error, blogs } = blogsList;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  useEffect(() => {
    if (userInfo) {
      dispatch(allBlogs());
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [dispatch, userInfo, navigate]);
  const deleteBlogHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
    }
  };
  return (
    <>
      <figure className="position-relative">
        <img src={blogTopImage} alt="blog" className="img-fluid pageImg" />
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
                      src={blog.image}
                      alt={blog.title}
                      className="blogListImg mx-auto d-block"
                    />
                  </Link>
                </Col>

                {userInfo.isAdmin ? (
                  <Col className="col-sm-5 mb-3 text-center">
                    <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
                    <Row className="d-flex  align-items-center text-sm-end">
                      <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                      <p className="mb-0">{blog.name}</p>
                    </Row>
                  </Col>
                ) : (
                  <Col className="col-sm-8 mb-3 text-center">
                    <h5 className="pageTitle mb-sm-4">{blog.title}</h5>
                    <Row className="d-flex  align-items-center text-sm-end">
                      <p className="mb-0">{blog.updatedAt.slice(0, 10)}</p>
                      <p className="mb-0">{blog.name}</p>
                    </Row>
                  </Col>
                )}
                {userInfo.isAdmin && (
                  <Col className="col-sm-3 mb-3 text-center">
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteBlogHandler(blog._id)}
                    >
                      Delete
                    </Button>
                  </Col>
                )}
              </Row>
            ))}
      </Container>
    </>
  );
};

export default BlogList;
