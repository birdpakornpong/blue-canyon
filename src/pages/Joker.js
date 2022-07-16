import React, { useState } from "react";
// useMemo ลดการ re-render โดยไม่จำเป็น
import UseCallback from "../components/HookExample/UseCallback";
import UseMemo from "../components/HookExample/UseMemo";
import ReducerExample from "../components/HookExample/ReducerExample";
export default function Joker() {
  const [name, setName] = useState("Mary");

  // 2. Use an effect for persisting the form
  function persistForm() {
    localStorage.setItem("formData", name);
  }

  return (
    <>
      {" "}
      <div>
        <button onClick={persistForm()}>Click to set localStorage</button>
      </div>
      <UseMemo />
      <UseCallback />
      <ReducerExample />
    </>
  );
}
