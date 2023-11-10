import React from "react";
import { popularProducts } from "../data/popularProducts";
import { PopularItem } from "./PopularItem";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular__row">
        {popularProducts.map(item => <PopularItem key={item.id} {...item}/>)}
      </div>
    </div>
  );
};
