import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { siteDetail, updateSite } from "../actions/siteActions";
import { SITE_UPDATE_RESET } from "../contents/siteContents";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Loader } from "@googlemaps/js-api-loader";

const SiteEdit = () => {
  const { id: siteId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  // future features not work now
  // const [rating, setRationg] = useState(0);
  // const [numComments, setNumComments] = useState(0);
  //
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const loader = new Loader({
    apiKey: "AIzaSyAI1thVh0FcREXtm-2zfheIoU9yBTNBZbE",
    libraries: ["places"],
  });

  const siteDetails = useSelector((state) => state.siteDetails);
  const { error, site } = siteDetails;

  const siteUpdate = useSelector((state) => state.siteUpdate);
  const { error: errorUpdate, success: successUpdate } = siteUpdate;

  useEffect(() => {
    loader
      .load()
      .then((google) => {
        initAutocomplete(google);
      })
      .catch((e) => {
        console.log(e.message);
      });
    if (successUpdate) {
      dispatch({ type: SITE_UPDATE_RESET });
      navigate("/admin/sitelist");
    } else {
      dispatch(siteDetail(siteId));
    }
    // eslint-disable-next-line
  }, [dispatch, navigate, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (image !== "" ) {
      if (!(lat === 0 && lng === 0)) {
        dispatch(
          updateSite({
            _id: siteId,
            name,
            description,
            image,
            category,
            lat,
            lng,
          })
        );
        setMessage("")
      } else {
        alert("Location not found!");
      }
    } else {
      setMessage("something wrong with image uploading, please try again.")
      alert("image not found");
    }
    
  };

  // google map settings
  const initAutocomplete = (x) => {
    const input = document.getElementById("showMap");
    const autocomplete = new x.maps.places.Autocomplete(input);
    autocomplete.addListener("place_changed", () => {
      const { lat, lng } = autocomplete.getPlace().geometry.location;
      setLat(lat());
      setLng(lng());
    });
  };

  const setMapForm = (e) => {
    e.preventDefault();
    loader
      .load()
      .then((google) => {
        initAutocomplete(google);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    try {
      const config = {
        headers: {
          "Content-Type": "multerpart/form-data",
        },
      };
      setMessage("please wait, the image is uploading...")
      const { data } = await axios.post("https://myway-backend.herokuapp.com/api/image/upload", formData, config);
      setImage(data.originalname);
      setInterval(() => {
        setMessage("Image uploading successfully!")
      }, 8000)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/admin/sitelist">
            <i
              className="fa-solid fa-arrow-left mt-5"
              style={{ color: "black" }}
            ></i>
          </Link>
          {site.name !== "name of the site" ? (
            <h2 className="mb-4 text-center">SITE UPDATE</h2>
          ) : (
            <h2 className="mb-4 text-center">SITE POST</h2>
          )}

          {errorUpdate && <p>{errorUpdate}</p>}
          {error && <p>{error}</p>}
          <br />
          <Form onSubmit={setMapForm}>
            <Form.Group>
              <Form.Label>Location: </Form.Label>
              <Form.Control
                id="showMap"
                type="string"
                placeholder="site location"
                className="mb-3"
              />
            </Form.Group>
          </Form>

          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="string"
                placeholder={site.name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="string"
                placeholder={site.category}
                onChange={(e) => setCategory(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={site.description}
                style={{ height: 250 }}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder="insert image"
                onChange={uploadFileHandler}
              ></Form.Control>
              <p style={{ color: "lightgrey" }}>{message}</p>
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
