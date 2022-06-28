import React from "react";
import ImgComponent from "../components/ImgComponent";
import ControlledAccordions from "../components/meterialUI/ControlledAccordions";
import Card from "../components/meterialUI/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

export default function Product() {
  return (
    <>
      <ImgComponent />
      {/* <ControlledAccordions /> */}
      <Container
        maxWidth="lg"
        style={{ marginTop: "4em", marginBottom: "4em" }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
