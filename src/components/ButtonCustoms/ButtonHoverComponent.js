import React from "react";
import "./ButtonHoverComponent.css";

export default function ButtonHoverComponent(props) {
  const slideDirection = props.slide;
  const message = props.message;
  return (
    <>
      <button
        className={
          slideDirection == "up"
            ? "ibtn hover-filled-slide-up"
            : "ibtn hover-filled-slide-left"
        }
      >
        <span>{message ? message : "Clickme"}</span>
      </button>
    </>
  );
}
