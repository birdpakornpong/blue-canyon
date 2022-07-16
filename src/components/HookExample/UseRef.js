import React, { useState, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef("");
  const [value, setValue] = useState("");

  const ref = useRef(null);

  const selectText = () => {
    const input = ref.current;
    if (input.value) input.select();
    else input.focus();
  };

  const InputText = React.forwardRef((props, ref) => (
    <input ref={ref} {...props} />
  ));

  return (
    <>
      ดึงค่าจาก Element: {value}
      <hr />
      <input ref={inputRef} type="text" placeholder="Enter text ..." />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Value
      </button>
      {value}
      <hr />
      <InputText ref={ref} placeholder="Enter text..." />
      <button onClick={selectText}>Focus</button>
    </>
  );
}
