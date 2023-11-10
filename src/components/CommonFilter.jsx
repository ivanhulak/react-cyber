import React from "react";
import { CustomCheckbox } from "./CustomCheckbox";
import { Search } from "./Search";

export const CommonFilter = ({ arrayList, title }) => {
   const [searchValue, setSearchValue] = React.useState("");

   return (
      <div className={`content-dropdown__brand ${title}-dropdown`}>
         <Search
            className={`${title}-dropdown__search`}
            value={searchValue}
            setSearchValue={setSearchValue}
         />
         <ul className={`${title}-dropdown__list`}>
            {arrayList
               .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
               .map((item) => (
                  <li key={item.id}>
                     <CustomCheckbox {...item} />
                  </li>
               ))}
         </ul>
      </div>
   );
};

export const BrandSettings = () => {
   return (
      <div className="content-dropdown__brand brand-dropdown">
         <Search className="brand-dropdown__search" />
         <ul className="brand-dropdown__list">
            {brandsList.map((item) => (
               <li key={item.id}>
                  <CustomCheckbox {...item} />
               </li>
            ))}
         </ul>
      </div>
   );
};

export const MemorySettings = () => {
   return (
      <div className="content-dropdown__memory memory-dropdown">
         <Search className="memory-dropdown__search" />
         <ul className="memory-dropdown__list">
            {memoriesList.map((item) => (
               <li key={item.id}>
                  <CustomCheckbox {...item} />
               </li>
            ))}
         </ul>
      </div>
   );
};
