import React from "react";
import cn from "classnames";
import IMAGES from "../assets/Images";

export const BurgerMenuButton = ({ setIsOpened, value }) => {

   const handleClick = () => {
      setIsOpened(prev => !prev)
   }

   return (
      <button
         className={cn("header__burger", { active: value })}
         onClick={handleClick}
      >
         <img src={value ? IMAGES.close : IMAGES.burger} alt="icon" />
      </button>
   );
};
