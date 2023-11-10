import React from "react";
import { products } from "../data/products";
import { CustomSelect } from "./CustomSelect";
import { ProductsBox } from "./ProductsBox";

export const ShopProducts = () => {
    return (
        <div className="shop__products products-shop">
            <div className="products-shop__top">
                <div className="products-shop__title">
                    Selected Products: <span>85</span>
                </div>
                <div className="products-shop__sort">
                    <CustomSelect />
                </div>
            </div>
            <div className="products-shop__body">
                <ProductsBox
                    array={products}
                    modificator={"products__box--shop"}
                />
            </div>
        </div>
    );
};
