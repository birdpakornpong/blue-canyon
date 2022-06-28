import React, { useEffect, useState } from "react";
import NavComponent from "../components/NavBarComponent";
import FooterComponent from "../components/FooterComponent";
import { Outlet } from "react-router-dom";

export default function Layout() {
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
    <>
      {scrollPosition < 700 ? <NavComponent /> : ""}
      {/* <NavComponent /> */}
      <Outlet />
      <FooterComponent />
    </>
  );
}
