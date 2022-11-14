import axios from "axios";
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const BlogEdit = () => {
  // const [image, setImage] = useState("");
  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-Type": "multerpart/form-data",
  //       },
  //     };
  //     const { data } = await axios.post("/api/upload", formData, config);
  //     setImage(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Link to="/myhome">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>
          <h2 className="mb-4 text-center">BLOG POST</h2>
          <Form>
            {/* <Form.Group controlId='image'>
              <Form.Label>Image: </Form.Label>
              <Form.Control
                type="file"
                placeholder='insert image'
                onChange={uploadFileHandler}
              ></Form.Control>
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="string" placeholder="Blog Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="article">
              <Form.Label>Article</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Blog contents..."
                rows={8}
              />
            </Form.Group>

            <div className="d-grid gap-2 d-md-block">
              <Button variant="secondary" type="submit" className="my-3 px-5 ">
                POST
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogEdit;
