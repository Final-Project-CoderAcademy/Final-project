import React from "react";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import sunriseIcon from "../material/sunrise.png";
import blogIcon from "../material/blogger.png";

const About = () => {
  const testImages = [
    {
      src: "https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "bigbanana",
    },
    {
      src: "https://images.unsplash.com/photo-1602242896752-b5c57d3f395f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80.jpg",
      alt: "pinklake",
    },
  ];

  return (
    <>
      <Carousel>
        {testImages.map(({ src, alt }, id) => (
          <Carousel.Item key={id}>
            <img className="d-block w-100" src={src} alt={alt} />
            <Carousel.Caption>
              <h2 className="fw-bold">Explore Australia</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container>
        <h2 className="text-center m-5">
          <Badge bg="secondary">ABOUT US</Badge>
        </h2>
        <Row className="d-flex align-items-center md">
          <Col md="auto">
            <img
              className="imgTop mx-auto d-block"
              src="https://images.unsplash.com/photo-1515861461225-1488dfdaf0a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="top"
            />
          </Col>
          <Col className="text-center">
            <p>
              We help travelers find the best destinations in Australia. Let's
              make it your best Australia trip.
            </p>
            <Link to="/register">
              <Button variant="info">Let's start!</Button>
            </Link>
          </Col>
        </Row>

        <h2 className="text-center mt-5">FEATURES</h2>
        <Row className="d-flex align-items-center">
          {/* Find Your Way */}
          <Col className="col-md-6">
            <Card className="text-center p-4 m-3">
              <Card.Img
                variant="top"
                src={sunriseIcon}
                className="featureIcon mx-auto d-block"
              />
              <Card.Body>
                <Card.Text>
                  Are you wondering where to travel? Here you will find a list
                  of recommended travel destinations by category. You are sure
                  to find the place you want to visit.
                </Card.Text>
                <Link to="/sites">
                  <Button variant="primary">Find Your Way</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          {/* Blog */}
          <Col>
            <Card className="text-center p-4 m-3">
              <Card.Img
                variant="top"
                src={blogIcon}
                className="featureIcon mx-auto d-block"
              />
              <Card.Body>
                <Card.Text>
                  Why not write a travel blog and share it with others or keep
                  it as a memory for yourself? You may also find places you want
                  to visit in other people's travel blogs.
                </Card.Text>
                <Link to="/blogs">
                  <Button variant="primary">Visit Blog Page</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
