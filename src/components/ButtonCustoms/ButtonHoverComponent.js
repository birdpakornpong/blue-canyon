import React from "react";
import "./ButtonHoverComponent.css";

export default function ButtonHoverComponent(props) {
  const slideDirection = props.slide;
  const message = props.message;
  const click = props.onClick;
  return (
    <>
      <button
        className={
          slideDirection == "up"
            ? "ibtn hover-filled-slide-up"
            : "ibtn hover-filled-slide-left"
        }
        onClick={click}
      >
        <span>{message ? message : "Clickme"}</span>
      </button>
    </>
  );
}
