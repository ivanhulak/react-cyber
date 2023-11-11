import React from "react";
import cyber_logo from "../assets/svg/cyber-logo.svg";
import cyber_logo_white from "../assets/svg/cyber-logo-white.svg";
import { features, features_white, nav_pages } from "../data/headerData";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import cn from "classnames";
import IMAGES from "../assets/Images";
import { BurgerMenuButton } from "./BurgerMenuButton";

export const Header = () => {

   const [isOpened, setIsOpened] = React.useState(false)

   return (
      <header className="header">
         <div className="container">
            <div className="header__body">
               <div className="header__top top-header">
                  <div className="top-header__logo">
                     <img src={cyber_logo} alt="Logotype" />
                  </div>
                  <div className="top-header__content">
                     <div className="top-header__content-inner">
                        <Search className={"top-header__search"} />
                        <div className="top-header__menu menu-nav">
                           <ul className="menu-nav__list">
                              {nav_pages.map((page) => (
                                 <Link key={page} to={"/"}>
                                    <li>{page}</li>
                                 </Link>
                              ))}
                           </ul>
                        </div>
                        <div className="top-header__features features-menu">
                           <ul className="features-menu__list">
                              {features.map((feature, idx) => (
                                 <li key={idx}>
                                    <img src={feature} alt="feature icon" />
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <BurgerMenuButton setIsOpened={setIsOpened} value={isOpened} />
               </div>
            </div>
         </div>
         <div className={cn('mobile-nav', { 'opened': isOpened })}>
            <BurgerMenuButton setIsOpened={setIsOpened} value={isOpened} />
            <div className="mobile-nav__inner">
               <div className="mobile-nav__logo">
                  <img src={cyber_logo_white} alt="Logotype" />
               </div>
               <Search className={"mobile-nav__search"} />
               <div className="mobile-nav__menu">
                  <ul className="mobile-nav__list">
                     {nav_pages.map((page) => (
                        <Link key={page} to={"/"}>
                           <li>{page}</li>
                        </Link>
                     ))}
                  </ul>
               </div>
               <div className="mobile-nav__features">
                  <ul className="mobile-nav__features-list">
                     {features_white.map((feature, idx) => (
                        <li key={idx}>
                           <img src={feature} alt="feature icon" />
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};
