import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { addCommentToOneSite, siteDetail } from "../actions/siteActions";

const SiteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const siteDetails = useSelector((state) => state.siteDetails);
  const { error, site } = siteDetails;
  const userLogIn = useSelector((state) => state.userLogIn);
  const { userInfo } = userLogIn
  const [comment, setComment] = useState("")

  const siteAddComment = useSelector((state) => state.siteAddComment)
  const {
    success: successProductReview,
    error: errorProductReview,
  } = siteAddComment



  useEffect(() => {
    if (successProductReview) {
      setComment('')
    }
    if (userInfo) {
      dispatch(siteDetail(id));
    } else {
      navigate('/login')
    }
  }, [dispatch, id, comment, navigate, successProductReview]);

  const dammyComment = [
    {
      username: "ABC",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet libero. ",
    },
    {
      username: "DEF",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet libero. ",
    },
    {
      username: "GHI",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet libero. ",
    },
    {
      username: "JKL",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed imperdiet libero. ",
    },
  ];


  const commentSubmitHandler = (e) => {
    e.preventDefault();
    if (!(e.target[0].value === "")) {
      dispatch(addCommentToOneSite(id, {
        content: comment
      }));
      alert('successfully comment!')
      navigate(`/sites/${id}`)
    } else {
      alert('The comment is empty!')
    }
  }
  return (
    <Container className="px-sm-5 mt-5">
      <img
        src={site.image}
        alt={site.name}
        className="my-sm-5 img-fluid d-block"
      />
      <h3 className="mt-5 fw-bold">{site.name}</h3>
      <p className="lh-lg fs-6">{site.description}</p>
      <div className="p-3 my-sm-5 text-sm-center commentContainer">

        <h5 style={{textAlign: 'left'}}>LOCATION</h5>
        <h5 className="mt-5 mb-3" style={{textAlign: 'left'}}>COMMENTS</h5>
        {site.comments === undefined ? "No comments." : site.comments.map(comment => (
          <Card key={comment._id} className="mb-1 border-1 d-flex">

        <h5>LOCATION</h5>
        <h5 className="mt-5 mb-3">COMMENTS</h5>
        {dammyComment.map(({ username, comment }, id) => (
          <Card className="mb-1 border-0 d-flex align-items-center" key={id}>

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

export default SiteDetail;
