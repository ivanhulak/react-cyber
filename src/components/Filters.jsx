import React from "react";
import { PriceSettings } from "./PriceSettings";
import { brandsList, memoriesList } from "../data/filtersData";
import { DropDown } from "./DropDown";
import { CommonFilter } from "./CommonFilter";

export const Filters = () => {
   return (
      <div className="filters">
         <DropDown title={"Price"}>
            <PriceSettings />
         </DropDown>
         <DropDown title={"Brand"}>
            <CommonFilter arrayList={brandsList} title={"brand"} />
         </DropDown>
         <DropDown title={"Buil-in memory"}>
            <CommonFilter arrayList={memoriesList} title={"memory"} />
         </DropDown>
         <DropDown title={"Protection class"}></DropDown>
         <DropDown title={"Screen diagonal"}></DropDown>
         <DropDown title={"Screen type"}></DropDown>
         <DropDown title={"Battery capacity"}></DropDown>
      </div>
   );
};

