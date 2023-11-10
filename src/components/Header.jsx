import React from 'react'
import cyber_logo from '../assets/svg/cyber-logo.svg';
import search_icon from '../assets/svg/search.svg';
import { features, nav_pages } from '../data/headerData';
import { Link } from 'react-router-dom'
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
         <div className="header__body">
            <div className="header__top top-header">
               <div className="top-header__logo">
                  <img src={cyber_logo} alt="Logotype" />
               </div>
               <Search className={"top-header__search"}/>
               <div className="top-header__menu menu-nav">
                  <ul className="menu-nav__list">
                     {nav_pages.map(page => <Link key={page} to={'/'}><li>{page}</li></Link>)}
                  </ul>
               </div>
               <div className="top-header__features features-menu">
                  <ul className="features-menu__list">
                     {features.map((feature, idx) => (
                        <li key={idx}><img src={feature} alt="feature icon" /></li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </header>
  )
}