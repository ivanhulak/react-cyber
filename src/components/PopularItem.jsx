import React from "react";
import { CommonButton } from "./CommonButton";

export const PopularItem = ({ name, img, info, color, lightMode }) => {
   return (
      <div
         className="carousel-popular__slide slide-popular"
         style={{ background: `${color}` }}
      >
         <div className="slide-popular__inner">
            <div className="slide-popular__images">
               <div
                  className="slide-popular__image"
                  style={{
                     backgroundImage: `${img.map(
                        (image) => `url(${image.image})`
                     )}`,
							backgroundPosition: `${img.map(image => `${image.position}`)}`,
							backgroundSize: `${img.map(image => `${image.size}`)}`
                  }}
               ></div>
            </div>
            <div className="slide-popular__info info-popular">
               <div
                  className="info-popular__name"
                  style={{
                     color: lightMode
                        ? "var(--main-white)"
                        : "var(--main-black)",
                  }}
               >
                  {name}
               </div>
               <div className="info-popular__description">{info}</div>
               <CommonButton
                  className={""}
                  value={lightMode ? "light" : "dark"}
               >
                  Shop Now
               </CommonButton>
            </div>
         </div>
      </div>
   );
};