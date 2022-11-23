import React, { useEffect } from "react";
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
  // get all sites list state from store
  const sitesList = useSelector((state) => state.sitesList);
  const { error, sites } = sitesList;

  useEffect(() => {
    dispatch(allSites());
    // eslint-disable-next-line
  }, [dispatch]);

  // get some sentence for show in the card
  const getOneSentence = (text) => {
    const sliceText = text.slice(0, 160);
    return sliceText + "...";
  };
  // get some line for show in the card
  const getOneLine = (text) => {
    const sliceText = text.slice(0, 30);
    return sliceText + "...";
  };
  // function to show the site image
  const imageShow = () => {
    sites.map((site) => {
      if (site.image.split("/")[1] !== "images") {
        showImage(site.name, site.image);
      }
    });
  };

  const showImage = async (title, name) => {
    return await fetch(
      `https://myway-backend.herokuapp.com/api/image/download?url=${name}`
    )
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        let blobUrl = URL.createObjectURL(blob);
        if (blobUrl) {
          document.getElementById(title).src = blobUrl;
        }
      });
  };
  if (
    sites &&
    sites.length !== 0 &&
    sites[sites.length - 1].image !== undefined &&
    sites[sites.length - 1].image.split("/")[1] !== "images"
  ) {
    imageShow();
  }

  return (
    <>
      <figure className="position-relative">
        <img
          src="https://images.unsplash.com/photo-1511225070737-5af5ac9a690d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="sites"
          className="img-fluid pageImg"
        />
        <figcaption>
          <h1>FIND YOUR WAY</h1>
        </figcaption>
      </figure>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <Container>
        {/* {Categories.map((category, id) => (
          <Button key={id} variant="light" className="btn-round mx-2 my-4 px-4">
            {category}
          </Button>
        ))} */}

        <h4 className="m-4 text-center">RECCOMENDED SITES</h4>

        <Row>
          {sites.map((site) => (
            <Col key={site._id} className="col-md-6 col-lg-4 mb-3" md="auto">
              <Card className="m-3">
                {site.image.split("/")[1] === "images" ? (
                  <Card.Img
                    variant="top"
                    src={site.image}
                    alt={site.name}
                    style={{ width: "100%", height: 200 }}
                  />
                ) : (
                  <Card.Img
                    variant="top"
                    src=""
                    id={site.name}
                    alt={site.name}
                    style={{ width: "100%", height: 200 }}
                  />
                )}

                <Card.Body>
                  <Card.Title>{getOneLine(`${site.name}`)}</Card.Title>
                  <Card.Text>{getOneSentence(`${site.description}`)}</Card.Text>
                  <Link to={`/sites/${site._id}`}>
                    <div className="text-end">
                      <Button
                        id="ReadMore"
                        variant="primary"
                        className="btn-round px-3"
                      >
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
