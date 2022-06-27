import React from "react";
import ConnectMetamark from "../components/ConnectMetamark";
import ImgComponent from "../components/ImgComponent";
import QueryComponent from "../components/QueryComponent";
import QueryPostComponent from "../components/QueryPostComponent";
import About from "../components/About";
import NoteState from "../context/notes/NoteState";
import InputPreviousValue from "../components/InputPreviousValue";
import CheckBox from "../components/CheckBox";

export default function Link() {
  return (
    <>
      <ImgComponent />
      <ConnectMetamark />
      <QueryPostComponent />
      <QueryComponent />
      <NoteState>
        <About />
      </NoteState>
      <InputPreviousValue />
      <CheckBox />
    </>
  );
}
