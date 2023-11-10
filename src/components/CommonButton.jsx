import React from "react";
import cn from "classnames";

export const CommonButton = ({ className, value, children }) => {
  return (
    <button
      className={cn(className, 'common__button', {
        'common__button--light': value === "light",
        'common__button--dark': value === "dark",
        'common__button--buy': value === "buy",
      })}
    >
      {children}
    </button>
  );
};
