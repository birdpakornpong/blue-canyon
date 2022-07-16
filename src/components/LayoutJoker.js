import React from "react";
import { Outlet } from "react-router-dom";
export default function LayoutJoker() {
  return (
    <>
      <div>LayoutJoker</div>
      <Outlet />
    </>
  );
}
