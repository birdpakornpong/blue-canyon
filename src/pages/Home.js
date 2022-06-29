import React from "react";
import ContentComponent from "../components/react-bootstrap/ContentComponent";
import CarouselComponent from "../components/react-bootstrap/CarouselComponent";
import ContentImgComponent from "../components/react-bootstrap/ContentImgComponent";
import ImgComponent from "../components/ImgComponent";

export default function Home() {
  return (
    <>
      <ImgComponent />
      <ContentImgComponent />
      <CarouselComponent />
      <ContentComponent />
      {/* <FooterComponent /> */}
    </>
  );
}
