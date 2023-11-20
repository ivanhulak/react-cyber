import React from "react";
import { useMediaQuery } from "react-responsive";
import { salesImages, mobileSalesImages } from "../data/salesImages";
import { CommonButton } from "./CommonButton";


export const Sales = () => {

  const breakPoint_1 = useMediaQuery({ query: "(max-width: 600px)" })
  const imagesList = breakPoint_1 ? mobileSalesImages : salesImages

  return (
    <div className="sales">
      {imagesList.map(image => (
         <img key={image.name} className={`sales__image--${image.name}`} src={image.image} alt="image" />
      ))}
      <div className="container">
        <div className="sales__body">
          <div className="sales__content">
            <div className="sales__info">
              <h2 className="sales__title">Big Summer <span>Sale</span></h2>
              <div className="sales__subtitle">
                Commodo fames vitae vitae leo mauris in. Eu consequat.
              </div>
            </div>
            <CommonButton className={"sales__btn"} value={"light"}>
              Shop Now
            </CommonButton>
          </div>
        </div>
      </div>
    </div>
  );
};
