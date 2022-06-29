import React, { useContext } from "react";
import ProductCard from "./productCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import productContext from "../../context/products/productContext";

export default function ProductSection() {
  const { state } = useContext(productContext);

  return (
    <>
      <Container
        maxWidth="lg"
        style={{ marginTop: "4em", marginBottom: "4em" }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {state.map((product) => (
            <Grid item xs={2} sm={3} md={3} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
