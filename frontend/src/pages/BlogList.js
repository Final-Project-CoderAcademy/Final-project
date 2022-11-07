import React from "react";
import { Container } from "react-bootstrap";
import blogTopImage from "../material/blogSection.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const BlogList = () => {
  const dammyImgs = [
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
      <figure className="position-relative">
        <img src={blogTopImage} alt="blog" className="img-fluid pageImg" />
        <figcaption>
          <h1>BLOG</h1>
        </figcaption>
      </figure>
      <Container>
        <h4 className="mt-4">All Posts</h4>

        {dammyImgs.map(({ src, alt }, id) => (
          <>
            <Row className="mt-4 d-flex justify-content-center">
              <Col className="col-sm-5 mb-3" md="auto">
                <Link to="/blogs/:id">
                  <img
                    key={id}
                    src={src}
                    alt={alt}
                    className="blogListImg mx-auto d-block"
                  />
                </Link>
              </Col>
              <Col className="col-sm-7 mb-3 text-center">
                <h5 className="pageTitle">
                  The BIG BANANA blog in Coffs Harbour
                </h5>
                <Row className="d-flex  align-items-center">
                  <Col className="col-sm-6 d-none d-sm-block"></Col>
                  <Col className="col-sm-6 mt-sm-5">
                    <p className="mb-0">23 January, 2022</p>
                    <p className="mb-0">By.ABC</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
        ))}
      </Container>
    </>
  );
};

export default BlogList;
