import React from "react";
import ImgComponent from "../components/ImgComponent";
import ProductSection from "../components/meterialUI/ProductSection";
import ProductState from "../context/products/ProductState";
import NoteState from "../context/notes/NoteState";
export default function Product() {
  return (
    <>
      <ImgComponent />
      <ProductState>
        <NoteState>
          <ProductSection></ProductSection>
        </NoteState>
      </ProductState>
    </>
  );
}
