import React from "react";
import cn from "classnames";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const CustomSelect = () => {
   const [isActive, setIsActive] = React.useState(false);
   const [selected, setSelected] = React.useState(false);
  console.log(selected)
   const handleClickOutside = () => {
      setIsActive(false);
   };
   const handleSelect = () => {
      setSelected((prev) => !prev);
   };

   const ref = useOutsideClick(handleClickOutside);

   return (
      <div className={cn("custom-select", { active: isActive })}>
         <button
            ref={ref}
            className="select-button"
            role="combobox"
            aria-labelledby="select button"
            aria-haspopup="listbox"
            aria-expanded="false"
            aria-controls="select-dropdown"
            onClick={() => setIsActive((prev) => !prev)}
         >
            <span className="selected-value">By rating</span>
            <span className={cn("arrow", { active: isActive })}></span>
         </button>
         <ul className="select-dropdown" role="listbox" id="select-dropdown">
            <li 
              role="option" 
              onClick={handleSelect}
              className={cn("select-dropdown__item", {
                selected: selected,
             })}
            >
               <input type="radio" id="rating" name="sort-by-rating-type" />
               <label htmlFor="rating">
                  <i className="bx bxl-rating"></i>By rating
               </label>
            </li>
            <li role="option">
               <input type="radio" id="price" name="sort-by-price-type" />
               <label htmlFor="price">
                  <i className="bx bxl-price"></i>By price
               </label>
            </li>
            <li role="option">
               <input type="radio" id="alphabet" name="sort-by-alphabet-type" />
               <label htmlFor="alphabet">
                  <i className="bx bxl-alphabet"></i>By alphabet
               </label>
            </li>
         </ul>
      </div>
   );
};
