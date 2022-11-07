import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SiteEdit = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/admin/sitelist">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">SITE POST</h2>
          <Form>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="string" placeholder="Site Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Category</Form.Label>
              <Form.Select className="w-50">
                <option>Select...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Lorem ipsum dolor sit amet....."
                style={{ height: 250 }}
              />
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="secondary" type="submit" className="my-3 px-5 ">
                CREATE
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SiteEdit;
