import React from "react";
import { popularProducts } from "../../data/popularProducts";
import { Dots } from "./Dots";
import { SlidesList } from "./SlidesList";

export const SliderContext = React.createContext();

export const PopularSlider = ({ width, height, autoPlay, autoPlayTime, slidesPerView }) => {
   const [slide, setSlide] = React.useState(0);
   const [touchPosition, setTouchPosition] = React.useState(null)

   const slidesLength = popularProducts.length / slidesPerView

   const goToSlide = (number) => {
      setSlide(number % slidesLength);
   };

   const changeSlide = (direction = 1) => {
      let slideNumber = 0;

      if (slide + direction < 0) {
         slideNumber = slidesLength - 1;
      } else {
         slideNumber = (slide + direction) % slidesLength;
      }

      setSlide(slideNumber);
   };

   const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX;

      setTouchPosition(touchDown);
   };

   const handleTouchMove = (e) => {
      if (touchPosition === null) {
         return;
      }

      const currentPosition = e.touches[0].clientX;
      const direction = touchPosition - currentPosition;

      if (direction > 10) {
         changeSlide(1);
      }

      if (direction < -10) {
         changeSlide(-1);
      }

      setTouchPosition(null);
   };

   React.useEffect(() => {
      if (!autoPlay) return;

      const interval = setInterval(() => {
         changeSlide(1);
      }, autoPlayTime);

      return () => {
         clearInterval(interval);
      };
   }, [slidesLength, slide]);

   return (
      <div
         style={{ width, height }}
         className="popular__slider"
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
      >
         <SliderContext.Provider
            value={{
               goToSlide,
               changeSlide,
               slidesCount: slidesLength,
               slideNumber: slide,
               items: popularProducts,
            }}
         >
            <SlidesList />
            <Dots />
         </SliderContext.Provider>
      </div>
   );
};
