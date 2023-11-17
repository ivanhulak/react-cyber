import React from 'react'
import { categoriesList } from '../data/categories'

export const Categories = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className={`container ${className}-container`}>
         <div className={`${className}__body`}>
            <div className={`${className}__row`}>
               {categoriesList.map(category => (
                  <div key={category.name} className={`${className}__item item-${className}`} >
                     <div className={`item-${className}__icon`}>
                        <img src={category.icon} alt={category.name} />
                     </div>
                     <div className={`item-${className}__category`}>{category.name}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
    </div>
  )
}