import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const SiteDetail = () => {
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
        src="https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt="site"
        className="my-sm-5 img-fluid mx-auto d-block"
      />
      <h3 className="mt-5 fw-bold">Title</h3>
      <p className="lh-lg fs-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
        imperdiet libero. Vestibulum tincidunt ultricies tincidunt. Nullam a
        neque quis orci mattis sollicitudin id quis quam. Nunc sed placerat
        libero, quis sodales justo. Quisque sit amet ligula egestas metus
        faucibus mattis. Mauris et imperdiet dolor, et elementum magna. Maecenas
        lorem felis, luctus quis est in, ultricies tristique velit. Mauris nec
        leo vel ipsum dictum venenatis. Vestibulum tempus tellus odio, id
        elementum nibh egestas non. Integer feugiat ligula dolor. Donec nec eros
        elementum, auctor ante ut, sodales nisl. Fusce sem est, dictum non
        feugiat quis, volutpat at libero. Fusce molestie laoreet urna non
        tincidunt. Curabitur pharetra est ornare pulvinar facilisis. Quisque
        aliquam tristique euismod. Nullam et bibendum mi.
      </p>
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
