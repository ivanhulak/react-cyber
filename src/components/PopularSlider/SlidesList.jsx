import React from "react";
import { PopularItem } from "../PopularItem";
import { SliderContext } from "./PopularSlider";

export const SlidesList = () => {
   const { slideNumber, items } = React.useContext(SliderContext);

   return (
      <div
         className="popular__slider-list"
         style={{ transform: `translateX(-${slideNumber * 100}%)` }}
      >
         {items.map((slide) => (
            <PopularItem key={slide.id} {...slide}/>
         ))}
      </div>
   );
};
