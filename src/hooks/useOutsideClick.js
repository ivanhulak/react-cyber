import React from "react";

export const useOutsideClick = (callback) => {
   const ref = React.useRef(null);

   React.useEffect(() => {
      const handleClick = (event) => {
         if (ref.current && !ref.current.contains(event.target)) {
            callback();
         }
      };

      document.addEventListener("click", handleClick);
      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, []);

   return ref;
};
