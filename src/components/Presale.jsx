import React from "react";
import { presales } from "../data/presales";
import { useMediaQuery } from "react-responsive";
import { CommonButton } from "./CommonButton";

export const Presale = () => {
   const isMobile = useMediaQuery({
      query: "(max-width: 650px)",
   });

   return (
      <div className="presale">
         <div className="presale__grid">
            {presales.map((item) => (
               <div
                  key={item.id}
                  className={`presale__box presale__box--${item.id}`}
                  style={{
                     backgroundImage: isMobile ? "unset" : `url(${item.img})`,
                  }}
               >
                  <div
                     className={`presale__box-inner presale__box-inner--${item.id}`}
                  >
                     {isMobile ? (
                        <div className="presale__box-image">
                           <img
                              src={item.img_mobile}
                              alt={`${item.title} image`}
                           />
                        </div>
                     ) : (
                        <></>
                     )}
                     <div
                        className={`presale__box-title presale__box-title--${item.id}`}
                     >
                        {item.title} <span>{item.title_bold}</span>
                     </div>
                     <div className="presale__box-description">{item.desc}</div>
                     {item.id === "four" ? (
                        <CommonButton
                           className={"column-presale__btn"}
                           value={"dark"}
                        >
                           Shop Now
                        </CommonButton>
                     ) : (
                        <></>
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};
