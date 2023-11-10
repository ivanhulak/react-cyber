import React from 'react';
import cn from "classnames";


export const DropDown = ({ title, children }) => {
   const [isOpened, setIsOpened] = React.useState(false);

   return (
      <div className="dropdown">
         <button
            className="dropdown__button"
            onClick={() => setIsOpened((prev) => !prev)}
         >
            <span className="dropdown__title">{title}</span>
            <span
               className={cn("dropdown__arrow", { active: isOpened })}
            ></span>
         </button>
         <div
            className={cn("dropdown__content content-dropdown", {
               active: isOpened,
            })}
         >
            {children}
         </div>
      </div>
   );
};