import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'
import './ContentImgComponent.css'
export default function ContentImgComponent() {
  return (
        <Row className="iwidth-100p">
            <Col xs="12" sm="12" lg="7">
                <div className="iheight-img">
                    <img
                        className="d-block iheight-img"
                        src="https://www.bluecanyonphuket.com/wp-content/uploads/2021/03/resize2-1536x1200.jpg"
                        alt="First slide"
                        />
                </div>
                
            </Col>
            <Col xs="12" sm="12" lg="5">
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

  )
}
