import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap";

const MyHome = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <Link to="/">
            <i
              data-id="back"
              className="fa-solid fa-arrow-left mt-5"
              style={{ color: "black" }}
            ></i>
          </Link>

          <CardGroup>
            <Card
              style={{
                backgroundColor: "lightgrey",
                textAlign: "center",
                margin: "20px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>MyDetails</Card.Title>
                <Card.Text>
                  You can change your account information here!
                </Card.Text>
                <Link to="/myhome/myDetails">
                  <Button variant="primary">To myDetails</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card
              style={{
                backgroundColor: "lightgrey",
                textAlign: "center",
                margin: "20px",
                border: "1px solid lightgrey",
                borderRadius: "10px",
              }}
            >
              <Card.Body>
                <Card.Title>MyBlogs</Card.Title>
                <Card.Text>You can manage your blogs here!</Card.Text>
                <Link to="/myhome/myBlogs">
                  <Button variant="primary">To myBlogs</Button>
                </Link>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
