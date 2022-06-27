import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Pakornpong",
    class: "Web Developer",
  };

  const [state, setState] = useState(s1);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Larry",
        class: "10b",
      });
    }, 10000);
  };
  return (
    <NoteContext.Provider value={{ state: state, update: update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
