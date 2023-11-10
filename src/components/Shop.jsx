import React from "react";
import { Filters } from "./Filters";
import { ShopProducts } from "./ShopProducts";

export const Shop = () => {
  return (
    <section className="shop">
      <div className="container">
        <div className="shop__body">
          <div className="shop__grid">
            <Filters />
            <ShopProducts />
          </div>
        </div>
      </div>
    </section>
  );
};
