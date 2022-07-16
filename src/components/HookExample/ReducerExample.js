import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChildForReducer from "./ChildForReducer";

export default function ReducerExample() {
  const counter = useSelector((state) => state);
  console.log(counter);
  const dispatch = useDispatch();
  const uMemo = useMemo(() => {
    return <ChildForReducer />;
  }, []);
  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "Car",
          })
        }
      >
        Car
      </button>{" "}
      &nbsp;&nbsp;&nbsp;
      <h1>{counter.reducer.vehicle}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "Bike",
          })
        }
      >
        Bike
      </button>
      <button onClick={() => dispatch({ type: "Bus" })}> Bus </button>
      {uMemo}
    </div>
  );
}
