import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductsBox = ({ array, modificator }) => {
  return (
    <div className={`products__box box-products ${modificator}`}>
      {array
        // .filter((product) => product.id <= 8)
        .map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
    </div>
  );
};