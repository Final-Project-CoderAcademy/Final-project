import React, { useEffect, useState } from "react";
import { Container, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { allBlogs, deleteBlog } from "../actions/blogActions";
import { useDispatch, useSelector } from "react-redux";

const BlogList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // delete success state
  const [successDelete, setSuccessDelete] = useState(false);

  // get blog list state from store
  const blogsList = useSelector((state) => state.blogsList);
  const { error, blogs } = blogsList;

  //get login user state from store
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  // get the state when blog deleted from store
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

  // delete blog function
  const deleteBlogHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
      setSuccessDelete(success);
    }
  };

  // function to show the blog images from state
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
              <p id="error" style={{ color: "lightgrey", textAlign: "center" }}>
                {error}
              </p>
            )
          : blogs.map((blog) => (
              <Link key={blog._id} to={`/blogs/${blog._id}`}>
                <Card
                  style={{
                    margin: "3vh auto",
                    textAlign: "right",
                    borderRadius: "10px",
                  }}
                  className="bg-dark text-white"
                >
                  <Card.Img src="text/plain" id={blog.title} alt={blog.title} />
                  <Card.ImgOverlay>
                    <Card.Title
                      style={{ position: "absolute", top: "2vh", right: "1vw" }}
                    >
                      {blog.title}
                      <br />
                      <br />
                      {blog.name}
                      <br />
                      {blog.updatedAt.slice(0, 10)}
                    </Card.Title>
                    {userInfo.isAdmin ? (
                      <Button
                        style={{
                          position: "absolute",
                          bottom: "2vh",
                          right: "1vw",
                        }}
                        variant="danger"
                        onClick={() => deleteBlogHandler(blog._id)}
                      >
                        Delete
                      </Button>
                    ) : !(userInfo._id === blog.user) ? (
                      <></>
                    ) : (
                      <Button
                        style={{
                          position: "absolute",
                          bottom: "2vh",
                          right: "1vw",
                        }}
                        variant="danger"
                        onClick={() => deleteBlogHandler(blog._id)}
                      >
                        Delete
                      </Button>
                    )}
                  </Card.ImgOverlay>
                </Card>
              </Link>
            ))}
      </Container>
    </>
  );
};

export default BlogList;
