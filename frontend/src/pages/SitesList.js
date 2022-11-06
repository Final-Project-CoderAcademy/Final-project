import React from "react";
import { Container } from "react-bootstrap";
import siteTopImage from "../material/sitesSection.jpg";

const SitesList = () => {
  return (
    <Container>
      <figure className="position-relative">
        <img src={siteTopImage} alt="sites" className="img-fluid pageImg" />
        <figcaption>
          <h1>FIND YOUR WAY</h1>
        </figcaption>
      </figure>
    </Container>
  );
};

export default SitesList;
