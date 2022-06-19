import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import NavComponent from "./components/NavBarComponent";
import ContentComponent from "./components/ContentComponent";
import CarouselComponent from "./components/CarouselComponent";
import ContentImgComponent from "./components/ContentImgComponent";
import FooterComponent from "./components/FooterComponent";
import ImgComponent from "./components/ImgComponent";

function App() {
  const [scrollPosition, setPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {scrollPosition < 700 ? <NavComponent /> : ""}
      {/* <NavComponent /> */}
      <ImgComponent />
      <ContentImgComponent />
      <CarouselComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
