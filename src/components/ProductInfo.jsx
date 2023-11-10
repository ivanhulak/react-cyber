import React from "react";
import IMAGES from "../assets/Images";
import { CommonButton } from "./CommonButton";

const productColors = ["#000", "#781DBC", "#E10000", "#E1B000", "#E8E8E8"];
const productMemory = ["128GB", "256GB", "512GB", "1TB"];
const detailInfo = [
   { icon: IMAGES.details_1, title: "Screen size", value: '6.7"' },
   { icon: IMAGES.details_2, title: "CPU", value: "Apple A16 Bionic" },
   { icon: IMAGES.details_3, title: "Number of Cores", value: 6 },
   { icon: IMAGES.details_4, title: "Main Camera", value: "48-12 -12 MP" },
   { icon: IMAGES.details_5, title: "Front Camera", value: '12 MP' },
   { icon: IMAGES.details_6, title: "Battery", value: '4323 mAh' },
];
const productCons = [
   { icon: IMAGES.cons_1, name: "Free Delivery", value: "1 - 2 day" },
   { icon: IMAGES.cons_2, name: "In Stock", value: "today" },
   { icon: IMAGES.cons_3, name: "Guaranteed", value: "1 year" },
];

const previewImgList = [IMAGES.main_preview, IMAGES.preview_1, IMAGES.preview_2, IMAGES.preview_3] 

export const ProductInfo = () => {

   return (
      <section className="singleProduct">
         <div className="container">
            <div className="singleProduct__grid info-product">
               <div className="info-product__images">
                  <div className="info-product__images-inner">
                     <ul className="info-product__images-preview">
                        {previewImgList.map((image, idx) => (
                           <li key={idx}><img src={image} alt="product image" /></li>
                        ))}   
                     </ul>
                     <div className="info-product__images-main">
                        <img src={IMAGES.main_preview} alt="big product image" />
                     </div>
                  </div>
               </div>
               <div className="info-product__content">
                  <div className="info-product__details details-info">
                     <div className="details-info__title">
                        Apple iPhone 14 Pro Max
                     </div>
                     <div className="details-info__price">
                        <div className="details-info__price-current">$1399</div>
                        <div className="details-info__price-old">$1499</div>
                     </div>
                     <div className="details-info__colors">
                        <span className="details-info__colors-label">
                           Select color :
                        </span>
                        <ul className="details-info__colors-list">
                           {productColors.map((color) => (
                              <li
                                 key={color}
                                 style={{ background: `${color}` }}
                              ></li>
                           ))}
                        </ul>
                     </div>
                     <ul className="details-info__memory-list list-memory">
                        {productMemory.map((memory) => (
                           <li key={memory}>{memory}</li>
                        ))}
                     </ul>
                     <div className="details-info__details">
                        {detailInfo.map((item, idx) => (
                           <div
                              key={idx}
                              className="details-info__details-item item-details"
                           >
                              <div className="item-details__inner">
                                 <div className="item-details__icon">
                                    <img src={item.icon} alt="icon" />
                                 </div>
                                 <div className="item-details__info">
                                    <div className="item-details__info-name">
                                       {item.title}
                                    </div>
                                    <div className="item-details__info-value">
                                       {item.value}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                     <div className="details-info__description">
                        <p>
                           Enhanced capabilities thanks toan enlarged display of
                           6.7 inchesand work without rechargingthroughout the
                           day. Incredible photosas in weak, yesand in bright
                           lightusing the new systemwith two cameras{" "}
                           <span>more...</span>
                        </p>
                     </div>
                  </div>
                  <div className="info-product__actions">
                     <CommonButton value={'dark'}>Add to Wishlist</CommonButton>
                     <CommonButton value={'buy'}>Add to Cart</CommonButton>
                  </div>
                  <div className="info-product__pros product-pros">
                     {productCons.map((item) => (
                        <div key={item.name} className="product-pros__item">
                           <div className="product-pros__inner">
                              <div className="product-pros__icon">
                                 <img src={item.icon} alt="icon" />
                              </div>
                              <div className="product-pros__info">
                                 <div className="product-pros__name">{item.name}</div>
                                 <div className="product-pros__value">{item.value}</div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
