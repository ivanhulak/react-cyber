import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../assets/Images";
import { CommonButton } from "./CommonButton";

export const ProductItem = ({ id, name, price, img }) => {
   return (
      <Link to={`/product/${id}`}>
         <article className="product">
            <div className="product__inner">
               <div className="product__info">
                  <div className="product__top">
                     <img src={IMAGES.favourite_grey} alt="like icon" />
                  </div>
                  <div className="product__image">
                     <img src={img} alt={`${name} icon`} />
                  </div>
                  <div className="product__name">{name}</div>
                  <div className="product__price">${price}</div>
               </div>
               <CommonButton className={"product__btn"} value={"buy"}>
                  Buy Now
               </CommonButton>
            </div>
         </article>
      </Link>
   );
};
