import React from "react";
import { products } from "../data/products";
import cn from "classnames";
import { ProductsBox } from "./ProductsBox";

const productsTypes = ["New Arrival", "Bestseller", "Featured Products"];

const filteredProducts = products.filter((product) => product.id <= 8)

export const Products = () => {
  
  return (
    <section className="products">
      <div className="container">
        <div className="products__body">
          <ul className="products__nav">
            {productsTypes.map((type) => (
              <li key={type} className={cn("products__nav-item", {
                  'active': false
               })}>{type}</li>
            ))}
          </ul>
          <ProductsBox array={filteredProducts} />
        </div>
      </div>
    </section>
  );
};
