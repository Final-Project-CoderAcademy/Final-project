import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
              <h2>Explore Australia</h2>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <h2 className="text-center m-5">
        <Badge bg="secondary">ABOUT US</Badge>
      </h2>
      <Container>
        <Row className="d-flex align-items-center">
          <Col md="auto">
            <img
              className="imgTop mx-auto d-block"
              src="https://images.unsplash.com/photo-1591701729564-3b5325d5a4bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="top"
            />
          </Col>
          <Col className="text-center">
            <p>
              We help travelers find the best destinations in Australia. Let's
              make it your best Australia trip.
            </p>
            <Button variant="info">Let's start!</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
