import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BlogArticle = () => {
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
    <Container className="px-sm-5">
      <h3 className="mt-5 fw-bold">Title</h3>
      <div className="text-end">
        <p className="mb-0">23 January, 2022</p>
        <p className="mb-0">By.ABC</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        alt="blog"
        className="my-3 img-fluid mx-auto d-block"
      />
      <div>
        <p className="px-3 lh-lg fs-6 mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
          imperdiet libero. Vestibulum tincidunt ultricies tincidunt. Nullam a
          neque quis orci mattis sollicitudin id quis quam. Nunc sed placerat
          libero, quis sodales justo. Quisque sit amet ligula egestas metus
          faucibus mattis. Mauris et imperdiet dolor, et elementum magna.
          Maecenas lorem felis, luctus quis est in, ultricies tristique velit.
          Mauris nec leo vel ipsum dictum venenatis. Vestibulum tempus tellus
          odio, id elementum nibh egestas non. Integer feugiat ligula dolor.
          Donec nec eros elementum, auctor ante ut, sodales nisl. Fusce sem est,
          dictum non feugiat quis, volutpat at libero. Fusce molestie laoreet
          urna non tincidunt. Curabitur pharetra est ornare pulvinar facilisis.
          Quisque aliquam tristique euismod. Nullam et bibendum mi.
        </p>
        <div className="text-end my-3 ">
          <Link to="/blogs/:id/edit">
            <Button variant="light" className="btn-round px-3 mx-2">
              Edit
            </Button>
          </Link>
          <Button variant="dark" className="btn-round px-3">
            Delete
          </Button>
        </div>
      </div>
      <div className="p-3 my-sm-5 text-sm-center commentContainer">
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

export default BlogArticle;
