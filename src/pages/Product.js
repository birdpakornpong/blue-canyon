import React from "react";
import ImgComponent from "../components/ImgComponent";
import ProductSection from "../components/meterialUI/ProductSection";
import ProductState from "../context/products/ProductState";
export default function Product() {
  return (
    <>
      <ImgComponent />
      <ProductState>
        <ProductSection></ProductSection>
      </ProductState>
    </>
  );
}
