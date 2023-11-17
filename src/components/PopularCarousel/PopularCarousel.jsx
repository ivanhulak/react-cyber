import React, { useEffect, useState } from "react";
import cn from "classnames";
import { PopularItem } from "../PopularItem";

export const PopularCarousel = ({
   slides = [],
   transitionSpeed = 500,
   slideWidth,
}) => {
   if (slides.length < 2) {
      console.error("Please provide more slides");
      return null;
   }

   const [visibleSlide, setVisibleSlide] = useState(1);
   const [hasTransitionClass, setHasTransitionClass] = useState(true);
   const [stateSlides, setStateSlides] = useState(slides);
   const [touchMovingDisabled, setTouchMovingDisabled] = useState(false);
   const [touchPosition, setTouchPosition] = useState(null);

   useEffect(() => {
      const slidesWithClones = [...slides];
      slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
      slidesWithClones.push(slidesWithClones[1]);
      setStateSlides(slidesWithClones);
   }, []);

   useEffect(() => {
      if (visibleSlide == stateSlides.length - 1) {
         setTouchMovingDisabled(true);
         setTimeout(() => {
            setHasTransitionClass(false);
            setVisibleSlide(1);
         }, transitionSpeed);
      }

      if (visibleSlide === 1) {
         setTimeout(() => {
            setHasTransitionClass(true);
         }, transitionSpeed);
      }

      if (visibleSlide === 0) {
         setTouchMovingDisabled(true);
         setTimeout(() => {
            setHasTransitionClass(false);
            setVisibleSlide(stateSlides.length - 2);
         }, transitionSpeed);
      }

      if (visibleSlide == stateSlides.length - 2) {
         setTimeout(() => {
            setHasTransitionClass(true);
         }, transitionSpeed);
      }
   }, [visibleSlide]);

   useEffect(() => {
      if (touchMovingDisabled) {
         setTimeout(() => {
            setTouchMovingDisabled(false);
         }, transitionSpeed * 2);
      }
   }, [touchMovingDisabled]);

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
         setVisibleSlide((prev) => ++prev);
      }

      if (direction < -10) {
         setVisibleSlide((prev) => --prev);
      }

      setTouchPosition(null);
   };

   const calculateLeftMargin = () => {
      return "-" + visibleSlide * slideWidth + "%";
   };

   const dotIsActive = (index) => {
      return (
         index === visibleSlide ||
         (index === 1 && visibleSlide === stateSlides.length - 1) ||
         (index === stateSlides.length - 2 && visibleSlide === 0)
      );
   };

   return (
      <section className="popular__carousel carousel-popular">
         <div
            className="carousel-popular__container"
            onTouchStart={!touchMovingDisabled ? handleTouchStart : null}
            onTouchMove={!touchMovingDisabled ? handleTouchMove : null}
         >
            <div
               className={cn("carousel-popular__slides", {
                  transition: hasTransitionClass,
               })}
               style={{ left: calculateLeftMargin() }}
            >
               {stateSlides.map((item, index) => (
                  <PopularItem key={index} {...item} />
               ))}
            </div>
         </div>
         <div className="carousel-popular__dots">
            {stateSlides.map((_, index) => {
               if (index === 0 || index === stateSlides.length - 1) {
                  return null;
               }
               return (
                  <div
                     key={index}
                     onClick={() => setVisibleSlide(index)}
                     className={cn("carousel-popular__dot", {
                        active: dotIsActive(index),
                     })}
                  />
               );
            })}
         </div>
      </section>
   );
};
