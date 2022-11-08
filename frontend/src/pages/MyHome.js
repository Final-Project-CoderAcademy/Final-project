import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const MyHome = () => {
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
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">MY HOME</h2>
          <Form className="mb-5">
            <Form.Group className="mb-3" controlId="userName">
              <Form.Label>Username </Form.Label>
              <Form.Control type="string" placeholder="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" placeholder="example@gmail.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password </Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="password" />
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="primary" type="submit" className="my-1 px-5 ">
                UPDATE
              </Button>
            </div>
          </Form>

          <div className="text-center">
            <h3 className="mb-3">MY BLOG</h3>
            <Link to="/blogs/:id/edit">
              <Button variant="info" className="px-4">
                CREATE A POST
              </Button>
            </Link>
          </div>
          {dammyImgs.map(({ src, alt }, id) => (
            <>
              <Row className="mt-4">
                <Col className="col-sm-5 mb-3" md="auto">
                  <Link to="/blogs/:id">
                    <img
                      key={id}
                      src={src}
                      alt={alt}
                      className=" mx-auto d-block"
                      style={{ height: 100, width: 100 }}
                    />
                  </Link>
                </Col>
                <Col className="col-sm-7 mb-3 text-center">
                  <h6 className="pageTitle">
                    The BIG BANANA blog in Coffs Harbour
                  </h6>
                  <Row className="d-flex  align-items-center text-sm-end">
                    <div>
                      <p className="mb-0">23 January, 2022</p>
                      <Link to="/blogs/:id/edit">
                        <Button
                          variant="light"
                          className=" px-2 mx-2"
                          size="sm"
                        >
                          Edit
                        </Button>
                      </Link>
                      <Button variant="dark" className=" px-2" size="sm">
                        Delete
                      </Button>
                    </div>
                  </Row>
                </Col>
              </Row>
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
