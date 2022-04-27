import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import './ContentComponent.css'
export default function ContentComponent() {
  return (
    // <div className="icontent-center">
    //     First Block
    // </div>
    <Container className="icontent-center">
        <Row className="iwidth-100p">
            <Col xs="12" md="5">1 of 2</Col>
            <Col xs="12" md="7">
                <Row className="itext-start">
                    <Col xs="12">
                        <p>
                        Blue Canyon Country Club originated from passion for game of golf and the exclusive lifestyle that entails, 
                        hence a distinguish members club was established. Our mission is to create an exceptionally desirable environment 
                        for our members and unforgettable golfing experience. We are committed to establish the club as the pinnacle of all golf courses 
                        in Asia by persistently advancing our golf courses conditions, quality and services. Our residences were designed for those desiring 
                        absolute privacy & safety in a gated community, exclusive lifestyle and great investment opportunities Join us in enjoying a splendor lifestyle
                        </p>
                    </Col>
                    <Col xs="12">ButtonCustom</Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
