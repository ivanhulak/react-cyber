import React from 'react'
import { categoriesList } from '../data/categories'

export const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
         <div className="categories__body">
            <div className="categories__row">
               {categoriesList.map(category => (
                  <div key={category.name} className="categories__item item-categories">
                     <div className="item-categories__icon">
                        <img src={category.icon} alt={category.name} />
                     </div>
                     <div className="item-categories__category">{category.name}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  )
}