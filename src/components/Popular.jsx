import React from "react";
import { popularProducts } from "../data/popularProducts";
import { PopularItem } from "./PopularItem";
import { useMediaQuery } from "react-responsive";
import { PopularCarousel } from "./PopularCarousel/PopularCarousel";

export const Popular = () => {
   let breakpoint_1 = useMediaQuery({ query: "(max-width: 1300px)" });
   let breakpoint_2 = useMediaQuery({ query: "(max-width: 992px)" });
   let breakpoint_3 = useMediaQuery({ query: "(max-width: 768px)" });
   let breakpoint_4 = useMediaQuery({ query: "(max-width: 475px)" });

   if(breakpoint_2) breakpoint_1 = false
   if(breakpoint_3) breakpoint_2 = false
   if(breakpoint_4) breakpoint_3 = false

   if(breakpoint_1) return <PopularCarousel slides={popularProducts} slideWidth={33.333}/>
   if(breakpoint_2) return <PopularCarousel slides={popularProducts} slideWidth={50}/>
   if(breakpoint_3) return <PopularCarousel slides={popularProducts} slideWidth={70}/>
   if(breakpoint_4) return <PopularCarousel slides={popularProducts} slideWidth={100}/>

   return (
      <section className="popular">
         <div className="popular__row">
            {popularProducts.map((item) => (
               <PopularItem key={item.id} {...item} />
            ))}
         </div> 
      </section>
   );
};
