import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "./CarouselComponent.css";

export default function SlideComponent() {
  return (
    <Carousel className="islide">
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 maxheight-img"
          src="https://s359.kapook.com/pagebuilder/d9ab72e3-0e69-4ec3-adb7-d1440744205a.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="text-position">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 maxheight-img"
          src="https://inwfile.com/s-di/0mrq2i.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="text-position">
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 maxheight-img"
          src="https://ภาพวิว.com/wp-content/uploads/2020/04/JGF-18.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="text-position">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
