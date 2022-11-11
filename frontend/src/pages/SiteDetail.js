import React, { useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { siteDetail } from "../actions/siteActions";

const SiteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const siteDetails = useSelector((state) => state.siteDetails);
  const { error, site } = siteDetails;

  useEffect(() => {
    dispatch(siteDetail(id));
  }, [dispatch, id]);

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

  return (
    <Container className="px-sm-5 mt-5">
      <img
        src={site.image}
        alt={site.name}
        className="my-sm-5 img-fluid mx-auto d-block"
      />
      <h3 className="mt-5 fw-bold">{site.name}</h3>
      <p className="lh-lg fs-6">{site.description}</p>
      <div className="p-3 my-sm-5 text-sm-center commentContainer">
        <h5>LOCATION</h5>
        <h5 className="mt-5 mb-3">COMMENTS</h5>
        {dammyComment.map(({ username, comment }, id) => (
          <Card className="mb-1 border-0 d-flex align-items-center">
            <Card.Body>
              <Card.Title className="fs-6 fw-bold text-start">
                FROM. {username}
              </Card.Title>
              <Card.Text className="text-start mb-0">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="text-end">
                <Card.Link href="#">EDIT</Card.Link>
                <Card.Link href="#">DELETE</Card.Link>
              </div>
            </Card.Body>
          </Card>
        ))}

        <h5 className="mt-5 mb-3">ADD COMMENT</h5>
        <div className="d-flex flex-column justify-content-center">
          <Form>
            <Form.Group className="mb-3" controlId="comment">
              <Form.Control as="textarea" placeholder="Comment....." rows={8} />
            </Form.Group>
          </Form>
          <div className="text-end my-1">
            <Button variant="secondary" className="btn-round px-3 mx-2">
              POST COMMENT
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SiteDetail;
