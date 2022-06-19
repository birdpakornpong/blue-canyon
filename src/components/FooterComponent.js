import React from "react";
import { Row, Col } from "react-bootstrap";
import "./FooterComponent.css";

export default function FooterComponent() {
  return (
    <div className="footer-i">
      <Row className="h-100 clear-row-i">
        {/* <Col xs="12" md="4" className='footer-owner-i'>
            <h5>Bird Pakornpong</h5>
            <h6>+66 (0)64 5420333</h6>
            <h6>birdpakorn@gmail.com</h6>
          </Col> */}
        <Col xs="12" md="12">
          <p>About | Content | Product | Promotion | Card</p>
        </Col>
        <Col xs="12" className="footer-end-i">
          <p>© 2022 Blue Canyon Country Club. All rights reserved.</p>
        </Col>
      </Row>
    </div>
  );
}
