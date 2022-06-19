import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonHoverComponent from "./ButtonCustoms/ButtonHoverComponent";
import "./ContentComponent.css";
export default function ContentComponent() {
  return (
    // <div className="icontent-center">
    //     First Block
    // </div>
    <Container className="icontent-center">
      <Row className="iwidth-100p">
        <Col xs="12" md="5">
          <div className="layout-img-i">
            <img
              className="d-block img-height-i"
              src="https://www.bluecanyonphuket.com/wp-content/uploads/2021/03/resize2-1536x1200.jpg"
              alt="First slide"
            />
          </div>
        </Col>
        <Col xs="12" md="7">
          <Row className="itext-start">
            <Col xs="12">
              <p>
                Blue Canyon Country Club originated from passion for game of
                golf and the exclusive lifestyle that entails, hence a
                distinguish members club was established. Our mission is to
                create an exceptionally desirable environment
              </p>
            </Col>
            <Col xs="12">
              <ButtonHoverComponent slide="left" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
