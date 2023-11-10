import React from "react";
import { ProductsBox } from "../ProductsBox";

export const CommonProductsLine = ({ title, array }) => {

   const filteredProducts = array.filter(
      (product) => product.hasDiscount === true
   );

   return (
      <section className="common__products">
         <div className="container">
            <div className="common__products-body">
               <h3 className="common__products-title title-24">{title}</h3>
               <ProductsBox array={filteredProducts} />
            </div>
         </div>
      </section>
   );
};
