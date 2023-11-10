import React from "react";
import { CommonButton } from "./CommonButton";

export const PopularItem = ({ name, img, info, color, lightMode }) => {
  return (
    <div className="popular__column column-popular" style={{background: `${color}`}}>
      <div className="column-popular__inner">
        <div className="column-popular__images">
          {img.map(image => (
            <div
              key={image.image}
              className="column-popular__image"
              style={image.styles}
            >
              <img src={image.image} alt="image" />
            </div>
          ))}
        </div>
        <div className="column-popular__info info-popular">
          <div className="info-popular__name" style={{ 
            color: lightMode ? 'var(--main-white)' : 'var(--main-black)'
         }}>{name}</div>
          <div className="info-popular__description">{info}</div>
          <CommonButton className={""} value={lightMode ? "light" : "dark"}>
            Shop Now
          </CommonButton>
        </div>
      </div>
    </div>
  );
};
