import React from "react";
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap";


const MyHome = () => {

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={12}>
          <Link to="/">
            <FontAwesomeIcon
              icon={solid("arrow-left")}
              style={{ width: 28, height: 23, color: "black" }}
              className="mt-5"
              variant="primary"
            />
          </Link>


          <CardGroup>

            <Card style={{backgroundColor: "lightgrey", textAlign: "center", margin: "20px", border: "1px solid lightgrey", borderRadius: "10px"}}>
              <Card.Body>
                <Card.Title>MyDetails</Card.Title>
                <Card.Text>
                  You can change your account information here!
                </Card.Text>
                <Link to="/myhome/myDetails">
                  <Button variant="primary">To myDetails</Button>
                </Link>
              </Card.Body>
            </Card>
            <Card style={{backgroundColor: "lightgrey", textAlign: "center",  margin: "20px", border: "1px solid lightgrey", borderRadius: "10px"}}>
              <Card.Body>
                <Card.Title>MyBlogs</Card.Title>
                <Card.Text>
                  You can manage your blogs here!
                </Card.Text>
                <Link to="/myhome/myBlogs">
                  <Button variant="primary">To myBlogs</Button>
                </Link>
              </Card.Body>
            </Card>

          </CardGroup>


        </Col>
      </Row>
    </Container>
  );
};

export default MyHome;
