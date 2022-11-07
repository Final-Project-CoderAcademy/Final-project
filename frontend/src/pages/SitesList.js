import React from "react";
import siteTopImage from "../material/sitesSection.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const SitesList = () => {
  const dammyImgs = [
    {
      src: "https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "bigbanana",
    },
    {
      src: "https://images.unsplash.com/photo-1602242896752-b5c57d3f395f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80.jpg",
      alt: "pinklake",
    },
    {
      src: "https://images.unsplash.com/photo-1636220506380-30a272f09562?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      alt: "bigbanana",
    },
    {
      src: "https://images.unsplash.com/photo-1602242896752-b5c57d3f395f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80.jpg",
      alt: "pinklake",
    },
  ];

  const dammyCategories = ["All", "Mountain", "Beach", "Snow", "Other"];
  return (
    <>
      <figure className="position-relative">
        <img src={siteTopImage} alt="sites" className="img-fluid pageImg" />
        <figcaption>
          <h1>FIND YOUR WAY</h1>
        </figcaption>
      </figure>

      <Container>
        {dammyCategories.map((category, id) => (
          <Button key={id} variant="light" className="btn-round mx-2 my-4 px-4">
            {category}
          </Button>
        ))}

        <h4 className="m-4 text-center">RECCOMENDED SITES</h4>

        <Row>
          {dammyImgs.map(({ src, alt }, id) => (
            <Col className="col-md-6 col-lg-4 mb-3" md="auto">
              <Card key={id} className="m-3">
                <Card.Img
                  variant="top"
                  src={src}
                  alt={alt}
                  style={{ height: 190 }}
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Link to="/sites/:id">
                    <div className="text-end">
                      <Button variant="primary" className="btn-round px-3">
                        Read More
                      </Button>
                    </div>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SitesList;
