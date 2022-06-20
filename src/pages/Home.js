import React from "react";
import ContentComponent from "../components/ContentComponent";
import CarouselComponent from "../components/CarouselComponent";
import ContentImgComponent from "../components/ContentImgComponent";
import FooterComponent from "../components/FooterComponent";
import ImgComponent from "../components/ImgComponent";

export default function Home() {
  return (
    <>
      <ImgComponent />
      <ContentImgComponent />
      <CarouselComponent />
      <ContentComponent />
      <FooterComponent />
    </>
  );
}
