import React from "react";
import { Link} from "react-router-dom";

import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, deleteBlog } from "../actions/blogActions";


const MyBlog = () => {
    const dispatch = useDispatch();
  
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
  

  
    const createBlogHandler = () => {
      dispatch(createBlog);
    };
  
    const deleteBlogHandler = (id) => {
      dispatch(deleteBlog(id));
    };
  

  return (
    <div style={{margin:"0 auto", padding: "5vh 0"}}>
    <div className="text-center">
      <h2 className="mb-3">MY BLOG</h2>

      <Link to={`/blogs/${userInfo._id}/create`}>
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
    </div>
  )
}

export default MyBlog