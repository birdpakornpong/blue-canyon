import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";

export default function About() {
  const { state, update } = useContext(noteContext);

  useEffect(() => {
    update();
  }, []);
  return (
    <div>
      This is About {state && state.name} And {state && state.class}
    </div>
  );
}
