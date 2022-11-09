import React from "react";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const WeatherSearch = () => {
  return (
    <Container>
      <Form className="d-flex align-items-center justify-content-center mt-4 mb-3">
        <FontAwesomeIcon
          icon={solid("magnifying-glass")}
          style={{ width: 28, height: 23, color: "black" }}
          variant="primary"
          className="me-3"
        />
        <Form.Control
          type="string"
          placeholder="Enter the city you want to visit"
          style={{ width: 300 }}
        />
      </Form>
      <div className="d-flex align-items-center justify-content-center text-center">
        <p className="fs-6 me-3">⛈</p>
        <p className="fs-6">Melbourne</p>
      </div>
    </Container>
  );
};

export default WeatherSearch;
