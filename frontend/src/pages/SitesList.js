import React, { useEffect } from "react";
import siteTopImage from "../material/sitesSection.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { allSites } from "../actions/siteActions";
import { useDispatch, useSelector } from "react-redux";

const SitesList = () => {
  const dispatch = useDispatch();
  const sitesList = useSelector((state) => state.sitesList);
  const { error, sites } = sitesList;

  useEffect(() => {
    dispatch(allSites());
  }, [dispatch]);

  const getOneSentence = (text) => {
    const sliceText = text.slice(0, 160);
    return sliceText + "...";
  };
  const getOneLine = (text) => {
    const sliceText = text.slice(0, 30);
    return sliceText + "...";
  };

  const dammyCategories = ["All", "Mountain", "Beach", "Snow", "Other"];
  return (
    <>
      <figure className="position-relative">
        <img src={siteTopImage} alt="sites" className="img-fluid pageImg" />
        <figcaption>
          <h1>FIND YOUR WAY</h1>
        </figcaption>
      </figure>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Container>
        {dammyCategories.map((category, id) => (
          <Button key={id} variant="light" className="btn-round mx-2 my-4 px-4">
            {category}
          </Button>
        ))}

        <h4 className="m-4 text-center">RECCOMENDED SITES</h4>

        <Row>
          {sites.map((site) => (
            <Col key={site._id} className="col-md-6 col-lg-4 mb-3" md="auto">
              <Card className="m-3">
                <Card.Img
                  variant="top"
                  src={site.image}
                  alt={site.name}
                  style={{ width: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{getOneLine(`${site.name}`)}</Card.Title>
                  <Card.Text>{getOneSentence(`${site.description}`)}</Card.Text>
                  <Link to={`/sites/${site._id}`}>
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
