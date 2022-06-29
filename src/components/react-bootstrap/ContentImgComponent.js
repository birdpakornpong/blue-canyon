import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ButtonHoverComponent from "../ButtonCustoms/ButtonHoverComponent";
import "./ContentImgComponent.css";

export default function ContentImgComponent() {
  return (
    <Row className="iwidth-100p">
      <Col xs="12" sm="12" lg="7">
        <div className="layout-img-i">
          <img
            className="d-block img-height-i"
            src="https://www.bluecanyonphuket.com/wp-content/uploads/2021/03/resize2-1536x1200.jpg"
            alt="First slide"
          />
        </div>
      </Col>
      <Col xs="12" sm="12" lg="5">
        <Row className="itext-content-img">
          <Col xs="12">
            <p>
              Blue Canyon Country Club originated from passion for game of golf
              and the exclusive lifestyle that entails, hence a distinguish
              members club was established. Our mission is to create an
              exceptionally desirable environment
            </p>
          </Col>
          <Col xs="12">
            <ButtonHoverComponent slide="up" />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
