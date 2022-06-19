import React from "react";
import { Form, FormControl, Button, Nav } from "react-bootstrap";
import "./ButtonHoverComponent.css";

export default function ButtonHoverComponent(props) {
  const slideDirection = props.slide;
  return (
    <>
      <button
        className={
          slideDirection == "up"
            ? "ibtn hover-filled-slide-up"
            : "ibtn hover-filled-slide-left"
        }
      >
        <span>ClickMe</span>
      </button>
    </>
  );
}
