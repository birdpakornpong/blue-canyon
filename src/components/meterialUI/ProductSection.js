import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import productContext from "../../context/products/productContext";
import noteContext from "../../context/notes/noteContext";

export default function ProductSection() {
  const { state } = useContext(productContext);
  const { state: note, update } = useContext(noteContext);

  useEffect(() => {
    update();
  }, []);

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
              <section oncontextmenu="return false;">
                <ProductCard product={product} />
              </section>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div>
        This is About {note && note.name} And {note && note.class}
      </div>
    </>
  );
}
