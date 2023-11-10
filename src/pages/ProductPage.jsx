import React from "react";
import { BreadCrumbs } from "../components/BreadCrumbs";
import { Comments } from "../components/Comment";
import { CommonProductsLine } from "../components/common/CommonProductsLine";
import { ProductDetails } from "../components/ProductDetails";
import { ProductInfo } from "../components/ProductInfo";
import { Reviews } from "../components/Reviews";
import { products } from "../data/products";


export const ProductPage = () => {

   window.scroll(top, 'smooth')

   return (
      <div className="single__product">
         <BreadCrumbs />
         <ProductInfo />
         <ProductDetails />
         <Reviews />
         <Comments />
         <CommonProductsLine title={'Related Products'} array={products}/>
      </div>
   );
};
