import React from "react";
import { CommonButton } from "../CommonButton";
import btn_arrow from '../../assets/icons/dropdown-arrow.svg';

export const CommonViewMore = ({ name }) => {
   return (
      <CommonButton className={`${name}__more`} value="dark">
         <div className={`${name}__more-text`}>View More</div>
         <div className={`${name}__more-icon`}>
            <img src={btn_arrow} alt="icon" />
         </div>
      </CommonButton>
   );
};
