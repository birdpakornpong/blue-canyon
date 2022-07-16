import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ChildForReducer({ data }) {
  const stData = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {stData.childreducer.cdata}
      <button onClick={() => dispatch({ type: "All" })}>All Vehicle</button>
    </div>
  );
}
