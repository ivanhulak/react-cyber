import React from "react";
import { Link } from "react-router-dom";
import { nav_pages } from "../data/headerData";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Categories } from "./Categories";
import { Search } from "./Search";
import cyber_logo_white from "../assets/svg/cyber-logo-white.svg";
import cn from "classnames";
import { HeaderFeatures } from "./HeaderFeatures";

export const MobileNav = ({ isOpened, setIsOpened }) => {
   return (
      <div className={cn("mobile-nav", { opened: isOpened })}>
         <BurgerMenuButton setIsOpened={setIsOpened} value={isOpened} />
         <div className="mobile-nav__inner">
            <div className="mobile-nav__top">
               <div className="mobile-nav__logo">
                  <img src={cyber_logo_white} alt="Logotype" />
               </div>
               <div className="mobile-nav__features">
                  <HeaderFeatures mode={'light'} className={"mobile-nav__features-list"}/>
               </div>
            </div>
            <Search className={"mobile-nav__search"} />
            <div className="mobile-nav__menu">
               <ul className="mobile-nav__list">
                  {nav_pages.map((p) => (
                     <Link key={p.page} to={p.link}>
                        <li>{p.page}</li>
                     </Link>
                  ))}
               </ul>
            </div>
            <Categories className={"categories-mobile"} />
         </div>
      </div>
   );
};
