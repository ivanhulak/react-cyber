import React from "react";
import { BrowseCategory } from "../components/BrowseCategory";
import { Categories } from "../components/Categories";
import { CommonProductsLine } from "../components/common/CommonProductsLine";
import { MainScreen } from "../components/MainScreen";
import { Popular } from "../components/Popular";
import { Presale } from "../components/Presale";
import { Products } from "../components/Products";
import { Sales } from "../components/Sales";
import { products } from "../data/products";

export const HomePage = () => {

   return (
      <>
         <Categories className={"categories"} />
         <MainScreen />
         <Presale />
         <BrowseCategory />
         <Products />
         <Popular />
         <CommonProductsLine title={"Discounts up to -50%"} array={products} />
         <Sales />
      </>
   );
};
