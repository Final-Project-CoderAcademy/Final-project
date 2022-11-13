import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { blogDetail, deleteBlog, addCommentToOneBlog } from "../actions/blogActions";

const BlogArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const blogDetails = useSelector((state) => state.blogDetails);
  const { error, blog } = blogDetails;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn;

  const blogDelete = useSelector((state) => state.blogDelete);
  const { success: successDelete, error: errorDelete } = blogDelete;
  const [comment, setComment] = useState("")
  const blogAddComment = useSelector((state) => state.blogAddComment)
  const {
    success: successComment,
    error: errorProductReview,
  } = blogAddComment
  useEffect(() => {
    if (successComment) {
      setComment('')
    }
    if (userInfo) {
      dispatch(blogDetail(id));
    } else {
      navigate("/login");
    }
  }, [dispatch, id, comment, navigate, successComment]);

  const deleteBlogHandler = (id) => {
    if (userInfo._id == blog.user && window.confirm("Are you sure?")) {
      dispatch(deleteBlog(id));
    }
  };


  const commentSubmitHandler = (e) => {
    e.preventDefault();
    if (!(e.target[0].value === "")) {
      dispatch(addCommentToOneBlog(id, {
        content: comment
      }));
      alert('successfully comment!')
      navigate(`/blogs/${id}`)
    } else {
      alert('The comment is empty!')
    }
  }
  return (
    <Container className="px-sm-5">
      <h3 className="mt-5 fw-bold">{blog.title}</h3>
      <div className="text-end">
        <p className="mb-0">{blog.updatedAt && blog.updatedAt.slice(0,10)}</p>
        <p className="mb-0">{blog.name}</p>
      </div>
      <img
        src={blog.image}
        alt={blog.title}
        className="my-3 img-fluid mx-auto d-block"
      />
      <div>
        <p className="px-3 lh-lg fs-6 mb-1">{blog.article}</p>
        {userInfo._id === blog.user && (
          <div className="text-end my-3 ">
            <Link to="/blogs/:id/edit">
              <Button variant="light" className="btn-round px-3 mx-2">
                Edit
              </Button>
            </Link>
            <Button
              variant="dark"
              className="btn-round px-3"
              onClick={() => deleteBlogHandler(blog._id)}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
      <div className="p-3 my-sm-5 text-sm-center commentContainer">
        <h5 className="mt-5 mb-3">COMMENTS</h5>
        {blog.comments === undefined ? "No comments." : blog.comments.map(comment => (
          <Card key={comment._id} className="mb-1 border-1 d-flex">
            <Card.Body>
              <Card.Text className="text-start mb-0">
                {comment.content}
              </Card.Text>
              <div className="text-end">
                {comment.name}
              </div>
              {(comment.name === userInfo.name || userInfo.isAdmin) && (
                <div className="text-end">
                  <Card.Link href="#">DELETE</Card.Link>
                </div>
              ) }
            </Card.Body>
          </Card>
        ))}

        <h5 className="mt-5 mb-3">ADD COMMENT</h5>
        <div className="d-flex flex-column justify-content-center">
            <Form onSubmit={commentSubmitHandler}>
              <Form.Group className="mb-3" controlId="comment">
                <Form.Control as="textarea" placeholder="Comment....." rows={8} onChange={(e) => setComment(e.target.value)}/>
              </Form.Group>
              <div className="text-end my-1">
                <Button type="submit" variant="secondary" className="btn-round px-3 mx-2">
                  POST COMMENT
                </Button>
              </div>
            </Form>
        </div>
      </div>
    </Container>
  );
};

export default BlogArticle;
