import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { siteDetail, updateSite } from "../actions/siteActions";
import { SITE_UPDATE_RESET } from "../contents/siteContents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const SiteEdit = () => {
  const { id: siteId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRationg] = useState(0);
  const [numComments, setNumComments] = useState(0);

  const siteDetails = useSelector((state) => state.siteDetails);
  const { error, site } = siteDetails;

  const siteUpdate = useSelector((state) => state.siteUpdate);
  const { error: errorUpdate, success: successUpdate } = siteUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: SITE_UPDATE_RESET });
      navigate("/admin/sitelist");
    } else {
      if (!site._id || site._id !== siteId) {
        dispatch(siteDetail(siteId));
      } else {
        setName(site.name);
        setCategory(site.category);
        setDescription(site.description);
        setImage(site.image);
        setRationg(site.rating);
        setNumComments(site.numComments);
      }
    }
     // eslint-disable-next-line
  }, [dispatch, navigate, siteId, site, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateSite({
        _id: siteId,
        name,
        description,
        rating,
        numComments,
        image,
        category,
      })
    );
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multerpart/form-data",
        },
      };
      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
    } catch (err) {
      console.log(err);
    }
  };

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
          {site.name !== "name of the site" ? (
            <h2 className="mb-4 text-center">SITE UPDATE</h2>
          ) : (
            <h2 className="mb-4 text-center">SITE POST</h2>
          )}

          {errorUpdate && <p>{errorUpdate}</p>}
          {error && <p>{error}</p>}
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="string"
                placeholder={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="string"
                placeholder={category}
                onChange={(e) => setCategory(e.target.value)}
              >
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={description}
                style={{ height: 250 }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId='image'>
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder='insert image'
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              {site.name !== "name of the site" ? (
                <Button
                  variant="secondary"
                  type="submit"
                  className="my-3 px-5 "
                >
                  UPDATE
                </Button>
              ) : (
                <Button
                  variant="secondary"
                  type="submit"
                  className="my-3 px-5 "
                >
                  CREATE
                </Button>
              )}
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SiteEdit;
