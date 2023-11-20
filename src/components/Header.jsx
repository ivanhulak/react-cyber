import React from "react";
import cyber_logo from "../assets/svg/cyber-logo.svg";
import cn from "classnames";
import { nav_pages } from "../data/headerData";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { MobileNav } from "./MobileNav";
import { HeaderFeatures } from "./HeaderFeatures";

export const Header = () => {
   const [isOpened, setIsOpened] = React.useState(false);
   const [selectedPage, setSelectedPage] = React.useState('Home');
   const [searchValue, setSearchValue] = React.useState('')

   return (
      <header className="header">
         <div className="container">
            <div className="header__body">
               <div className="header__top top-header">
                  <Link to="/">
                     <div className="top-header__logo">
                        <img src={cyber_logo} alt="Logotype" />
                     </div>
                  </Link>
                  <div className="top-header__content">
                     <div className="top-header__content-inner">
                        <Search 
                           className={"top-header__search"} 
                           value={searchValue} 
                           setSearchValue={setSearchValue}
                        />
                        <div className="top-header__menu menu-nav">
                           <ul className="menu-nav__list">
                              {nav_pages.map((p) => (
                                 <Link key={p.page} to={p.link}>
                                    <li 
                                       className={cn('menu-nav__list-item', { 
                                          'selected': selectedPage.toLowerCase() === p.page.toLowerCase() 
                                       })}
                                       onClick={() => setSelectedPage(p.page)}
                                    >{p.page}</li>
                                 </Link>
                              ))}
                           </ul>
                        </div>
                        <div className="top-header__features features-menu">
                           <HeaderFeatures mode={'dark'} className={"features-menu__list"}/>
                        </div>
                     </div>
                  </div>
                  <BurgerMenuButton
                     setIsOpened={setIsOpened}
                     value={isOpened}
                  />
               </div>
            </div>
         </div>
         <MobileNav isOpened={isOpened} setIsOpened={setIsOpened}/>
      </header>
   );
};
