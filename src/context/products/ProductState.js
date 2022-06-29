import React, { useState } from "react";
import ProductContext from "./productContext";

const productState = (props) => {
  const s1 = [
    {
      id: 1,
      name: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      id: 2,
      name: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      id: 3,
      name: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      id: 4,
      name: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      id: 5,
      name: "Shrimp and Chorizo Paella",
      subheader: "September 14, 2016",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  ];

  return (
    <ProductContext.Provider value={{ state: s1 }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default productState;
