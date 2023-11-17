import React from "react";
import cn from "classnames";
import { SliderContext } from "./PopularSlider";

export const Dot = ({ number }) => {

   const { goToSlide, slideNumber } = React.useContext(SliderContext);

   return (
      <div
         className={cn('popular__slider-dot', { 'selected': slideNumber === number })}
         onClick={() => goToSlide(number)}
      />
   );
};
