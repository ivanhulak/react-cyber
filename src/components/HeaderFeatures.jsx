import React from "react";
import { Link } from "react-router-dom";
import { features } from "../data/headerData";

export const HeaderFeatures = ( { mode, className } ) => {
   return (
      <ul className={className}>
         {features.map((f, idx) => (
            <li key={idx}>
               <Link to={f.link}>
                  <img src={mode === 'light' ? f.icon_white : f.icon_black} alt="feature icon" />
               </Link>
            </li>
         ))}
      </ul>
   );
};
