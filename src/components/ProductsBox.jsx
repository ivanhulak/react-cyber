import React from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "./ProductItem";

export const ProductsBox = ({ array, modificator }) => {
   return (
      <div className={`products__box box-products ${modificator}`}>
         {array.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
               <ProductItem {...product} />
            </Link>
         ))}
      </div>
   );
};
